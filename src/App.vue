<template>
  <div id="app-root">
    <StartScreen
      v-show="currentState === 'idle' && !showTutorial && !showSettings"
      :best-score="bestScore"
      @start="handleStart"
      @tutorial="showTutorial = true"
      @settings="openSettings"
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
import { NailongController } from './game/NailongController.js'
import { GameStateManager, GameState } from './game/GameState.js'

// ---- 游戏核心实例 ----
const engine = new GameEngine()
const audio = new AudioManager()
const input = new GyroscopeInput()
const nailong = new NailongController()
const gs = new GameStateManager()

// ---- 响应式状态 ----
const currentState = ref('idle')
const gifType = ref('none')
const bestScore = ref(gs.bestScore)
const showTutorial = ref(false)
const showSettings = ref(false)
const currentVolumes = reactive(audio.getVolumes())
const uiState = ref({
  state: 'idle', score: 0, timeRemaining: 60,
  bestScore: 0, won: false, getAccuracy: () => 0
})

function syncUIState() {
  uiState.value = {
    state: gs.state, score: gs.score,
    timeRemaining: gs.timeRemaining, bestScore: gs.bestScore,
    won: gs.won, getAccuracy: () => gs.getAccuracy()
  }
}

// ---- 游戏循环 ----
let animFrameId = null, lastTime = 0, isLoopRunning = false
let prevNailongState = 'idle', gifTimer = null
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
    // 更新奶龙 — 检测是否触碰玩家
    const result = nailong.update(dt, _playerPos)
    if (result.gameOver) {
      // 奶龙触碰玩家 → 失败
      handleGameOver(false)
      return
    }

    const pos = nailong.position
    engine.setNailongPosition(pos.x, pos.y, pos.z)
    audio.updateNailongPosition(pos.x, pos.y, pos.z)

    // 更新心跳速率
    const dist = nailong.distanceTo(_playerPos)
    audio.updateHeartbeatRate(dist)

    // 奶龙从 hit 恢复 → 重启笑声
    if (prevNailongState === 'hit' && nailong.state !== 'hit') {
      audio.startNailongSound()
    }
    prevNailongState = nailong.state
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

  // 奶龙
  nailong.reset()
  nailong.spawn(_playerPos)
  prevNailongState = 'idle'
  const pos = nailong.position
  engine.setNailongPosition(pos.x, pos.y, pos.z)
  audio.updateNailongPosition(pos.x, pos.y, pos.z)

  // 音频
  audio.startNailongSound()
  audio.startHeartbeat()
  // audio.startBGM()  // TODO: BGM文件就绪后启用

  // 键盘
  document.addEventListener('keydown', onKeyDown)

  // 游戏循环
  if (!isLoopRunning) {
    isLoopRunning = true
    lastTime = performance.now()
    animFrameId = requestAnimationFrame(gameLoop)
  }

  gs.ready()
  currentState.value = gs.state
  syncUIState()
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
  audio.stopNailongSound()
  document.removeEventListener('keydown', onKeyDown)
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
    // 照中奶龙！
    gs.recordKill()
    syncUIState()
    audio.playHitSound()
    engine.showHitFlash(aim.point)
    nailong.onHit()
    audio.stopNailongSound()
    prevNailongState = 'hit'
    showGif('kill', 2000)
  } else {
    audio.playMissSound()
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
    case 'nailong': audio.setNailongVolume(value); break
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
  audio.stopNailongSound()
  audio.stopHeartbeat()
  audio.stopBGM()
  engine.dispose()
  document.removeEventListener('keydown', onKeyDown)
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
  input.dispose()
  audio.dispose()
  engine.dispose()
  gs.dispose()
})
</script>

<style scoped>
#app-root { width: 100%; height: 100%; position: relative; }
</style>
