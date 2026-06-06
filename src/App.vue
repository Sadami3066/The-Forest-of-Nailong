<template>
  <div id="app-root">
    <StartScreen
      v-show="currentState === 'idle' && !showTutorial && !showSettings"
      :best-score="bestScore"
      @start="tryStartBGM(); handleStart()"
      @tutorial="tryStartBGM(); showTutorial = true"
      @settings="tryStartBGM(); openSettings()"
    />

    <GameView
      v-show="currentState !== 'idle' && !showTutorial"
      :game-state="uiState"
      :gif-type="gifType"
      @fire="handleFlash"
      @restart="handleStart"
      @back-to-menu="handleBackToMenu"
    />

    <TutorialOverlay
      :visible="showTutorial"
      @start="handleStartFromTutorial"
      @skip="showTutorial = false"
    />

    <SettingsPanel
      :visible="showSettings"
      :volumes="currentVolumes"
      @update="handleVolumeChange"
      @close="showSettings = false"
    />

    <!-- 陀螺仪校准提示 -->
    <Transition name="fade">
      <div v-if="showGyroHint" class="gyro-hint-overlay">
        <div class="gyro-hint-card">
          <span class="gyro-hint-icon">📱</span>
          <p class="gyro-hint-text">将手机举至与地面垂直</p>
          <p class="gyro-hint-sub">保持自然握持姿势即可</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue'
import * as THREE from 'three'
import StartScreen from './components/StartScreen.vue'
import GameView from './components/GameView.vue'
import TutorialOverlay from './components/TutorialOverlay.vue'
import SettingsPanel from './components/SettingsPanel.vue'

import { GameEngine } from './game/GameEngine.js'
import { AudioManager } from './game/AudioManager.js'
import { GyroscopeInput } from './game/GyroscopeInput.js'
import { NaiwaController } from './game/NaiwaController.js'
import { GameStateManager, GameState } from './game/GameState.js'

// ---- 游戏核心实例 ----
const engine = new GameEngine()
const audio = new AudioManager()
const input = new GyroscopeInput()
const naiwa = new NaiwaController()
const gs = new GameStateManager()

// ---- 响应式状态 ----
const currentState = ref('idle')
const gifType = ref('none')
const bestScore = ref(gs.bestScore)
const showTutorial = ref(false)
const showSettings = ref(false)
const showGyroHint = ref(false)
const currentVolumes = reactive(audio.getVolumes())

// 主页BGM — 首次用户交互时启动
let _bgmStarted = false
async function tryStartBGM() {
  if (_bgmStarted) return
  _bgmStarted = true
  try {
    await audio.init()
    audio.startBGM()
    console.log('主页BGM已启动')
  } catch (e) { console.warn('BGM启动失败:', e) }
}

// 页面加载后立即准备AudioContext，首次点击/触摸即启动BGM
document.addEventListener('click', tryStartBGM, { once: true })
document.addEventListener('touchstart', tryStartBGM, { once: true })
const uiState = ref({
  state: 'idle', score: 0, kills: 0, timeRemaining: 60,
  bestScore: 0, won: false, combo: 0, maxCombo: 0,
  getAccuracy: () => 0, getRating: () => 'C',
  getJustUnlocked: () => [], getLeaderboard: () => [], getRank: () => 1
})

function syncUIState() {
  uiState.value = {
    state: gs.state, score: gs.score, kills: gs.kills,
    timeRemaining: gs.timeRemaining, bestScore: gs.bestScore,
    won: gs.won, combo: gs.combo, maxCombo: gs.maxCombo,
    getAccuracy: () => gs.getAccuracy(),
    getRating: () => gs.getRating(),
    getJustUnlocked: () => gs.getJustUnlocked(),
    getLeaderboard: () => gs.getLeaderboard(),
    getRank: () => gs.getRank()
  }
}

// ---- 游戏循环 ----
let animFrameId = null, lastTime = 0, isLoopRunning = false
let prevNaiwaState = 'idle', gifTimer = null
const _playerPos = new THREE.Vector3(0, 0, 0)
const _upVec = new THREE.Vector3(0, 1, 0)

function gameLoop(timestamp) {
  if (!isLoopRunning) return
  const dt = Math.min((timestamp - lastTime) / 1000, 0.1)
  lastTime = timestamp

  input.update()
  const euler = input.getEuler()
  engine.updateCameraRotation(euler)
  const forward = engine.getCameraForward()
  audio.updateListenerOrientation(forward, _upVec)

  if (gs.state === GameState.PLAYING) {
    // 更新奶蛙 — 检测是否触碰玩家
    const result = naiwa.update(dt, _playerPos)
    if (result.gameOver) {
      // 奶蛙贴脸 → 跳杀特效
      isLoopRunning = false
      engine.shakeScreen(0.15)
      engine.showJumpscare(naiwa.position)
      setTimeout(() => handleGameOver(false), 500)
      return
    }

    const pos = naiwa.position
    engine.setNaiwaPosition(pos.x, pos.y, pos.z)
    audio.updateNaiwaPosition(pos.x, pos.y, pos.z)

    // 更新心跳速率
    const dist = naiwa.distanceTo(_playerPos)
    audio.updateHeartbeatRate(dist)

    // 奶蛙从 hit 恢复 → 重启笑声
    if (prevNaiwaState === 'hit' && naiwa.state !== 'hit') {
      audio.startNaiwaSound()
    }
    prevNaiwaState = naiwa.state
  }

  engine.render()
  animFrameId = requestAnimationFrame(gameLoop)
}

// ---- 游戏控制 ----
async function handleStart() {
  console.log('handleStart')

  gs.start()
  currentState.value = gs.state
  syncUIState()

  // 陀螺仪权限
  try { await input.requestPermission() } catch (e) {}

  // 确保布局完成
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))

  // 初始化引擎
  if (!engine.isRunning) {
    const canvas = document.getElementById('game-canvas')
    if (canvas) {
      engine.init(canvas)
    } else {
      console.error('canvas not found')
      return
    }
  }

  // 音频
  try { await audio.init() } catch (e) { console.error('audio init:', e) }

  // 输入
  input.init()
  input.calibrate()
  input.enable()

  // 奶蛙
  naiwa.reset()
  naiwa.spawn(_playerPos)
  prevNaiwaState = 'idle'
  const pos = naiwa.position
  engine.setNaiwaPosition(pos.x, pos.y, pos.z)
  audio.updateNaiwaPosition(pos.x, pos.y, pos.z)

  // 音频
  audio.startNaiwaSound()
  audio.startHeartbeat()
  audio.startBGM()

  // 键盘 + 移动端点屏幕发射
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('click', onScreenTap)

  // 游戏循环
  if (!isLoopRunning) {
    isLoopRunning = true
    lastTime = performance.now()
    animFrameId = requestAnimationFrame(gameLoop)
  }

  gs.ready()
  currentState.value = gs.state
  syncUIState()

  // 移动端显示陀螺仪校准提示
  if ('ontouchstart' in window) {
    showGyroHint.value = true
    setTimeout(() => { showGyroHint.value = false }, 3000)
  }

  console.log('game ready')
}

function handleGameOver(won) {
  console.log('Game over:', won ? 'WIN' : 'LOSE')
  isLoopRunning = false
  if (animFrameId) cancelAnimationFrame(animFrameId)

  if (won) {
    audio.playWinSound()
  } else {
    audio.playLoseSound()
  }
  audio.stopHeartbeat()
  audio.stopNaiwaSound()
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('click', onScreenTap)
  input.disable()

  gs.won = won
  if (won && gs.score > bestScore.value) bestScore.value = gs.score
  gs.endGame()
  currentState.value = gs.state
  syncUIState()
}

function handleFlash() {
  if (gs.state !== GameState.PLAYING) return

  audio.playFlashSound()
  const aim = engine.checkAim()

  if (aim.hit) {
    // 照中奶蛙！
    gs.recordKill()
    syncUIState()
    audio.playHitSound()
    engine.showHitFlash(aim.point)
    engine.spawnHitParticles(aim.point)
    engine.shakeScreen(0.06)
    naiwa.onHit()
    audio.stopNaiwaSound()
    prevNaiwaState = 'hit'
    showGif('kill', 2000)
  } else {
    audio.playMissSound()
    gs.recordMiss()
    syncUIState()
  }
}

function showGif(type, duration = 1800) {
  if (gifTimer) clearTimeout(gifTimer)
  gifType.value = type
  gifTimer = setTimeout(() => { gifType.value = 'none' }, duration)
}

function onKeyDown(e) {
  if (e.code === 'Space' || e.key === ' ') {
    e.preventDefault()
    handleFlash()
  }
}

function onScreenTap(e) {
  // 只在移动端（触摸设备）响应，且不响应手电按钮上的点击
  if (!('ontouchstart' in window)) return
  const target = e.target
  if (target && (target.closest('.flash-btn') || target.closest('.flash-container'))) return
  handleFlash()
}

// 从教程直接进入游戏
function handleStartFromTutorial() {
  showTutorial.value = false
  handleStart()
}

// 打开设置
function openSettings() {
  // 同步当前音量到滑块
  const vols = audio.getVolumes()
  Object.assign(currentVolumes, vols)
  showSettings.value = true
}

// 音量变化
function handleVolumeChange({ key, value }) {
  currentVolumes[key] = value
  switch (key) {
    case 'master': audio.setMasterVolume(value); break
    case 'naiwa': audio.setNaiwaVolume(value); break
    case 'heartbeat': audio.setHeartbeatVolume(value); break
    case 'bgm': audio.setBGMVolume(value); break
    case 'sfx': audio.setSFXVolume(value); break
  }
}

function handleBackToMenu() {
  isLoopRunning = false
  if (animFrameId) cancelAnimationFrame(animFrameId)
  if (gifTimer) clearTimeout(gifTimer)
  gifType.value = 'none'
  input.disable()
  audio.stopNaiwaSound()
  audio.stopHeartbeat()
  // BGM继续播放，回到主页也保持
  engine.dispose()
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('click', onScreenTap)
  gs.backToMenu()
  currentState.value = gs.state
  syncUIState()
}

// 定时同步UI
const _syncInterval = setInterval(() => {
  if (gs.state === GameState.PLAYING || gs.state === GameState.GAME_OVER) {
    syncUIState()
    if (gs.timeRemaining <= 0 && gs.state === GameState.PLAYING) {
      handleGameOver(true)
    }
  }
}, 500)

onUnmounted(() => {
  clearInterval(_syncInterval)
  isLoopRunning = false
  if (animFrameId) cancelAnimationFrame(animFrameId)
  if (gifTimer) clearTimeout(gifTimer)
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('click', onScreenTap)
  input.dispose()
  audio.dispose()
  engine.dispose()
  gs.dispose()
})
</script>

<style scoped>
#app-root { width: 100%; height: 100%; position: relative; }

.gyro-hint-overlay {
  position: fixed; bottom: 20%; left: 0; right: 0;
  display: flex; justify-content: center; z-index: 20;
  pointer-events: none;
}
.gyro-hint-card {
  background: rgba(0,0,0,0.8); border: 1px solid rgba(0,255,65,0.25);
  border-radius: 12px; padding: 16px 24px; text-align: center;
  animation: hintPulse 3s ease-in-out;
}
.gyro-hint-icon { font-size: 2rem; display: block; margin-bottom: 6px; }
.gyro-hint-text { font-size: 0.95rem; color: var(--hud-green); letter-spacing: 0.08em; margin: 0; }
.gyro-hint-sub { font-size: 0.75rem; color: var(--text-dim); margin: 4px 0 0; }

.fade-enter-active { animation: hintPulse 3s ease-out; }
.fade-leave-active { transition: opacity 0.5s; }
.fade-leave-to { opacity: 0; }

@keyframes hintPulse {
  0% { opacity: 0; transform: translateY(10px); }
  15% { opacity: 1; transform: translateY(0); }
  75% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
