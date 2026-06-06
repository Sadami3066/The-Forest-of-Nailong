<template>
  <div class="gameover-overlay" v-if="visible">
    <div class="gameover-panel">
      <!-- 失败时奶蛙大笑 -->
      <img v-if="!gameState.won" :src="laughGif" class="laugh-gif" alt="" />

      <div class="result-badge" :class="gameState.won ? 'win' : 'lose'">
        <h2 class="result-title">{{ gameState.won ? '✨ 你赢了！' : '💀 你输了' }}</h2>
        <div class="rating-badge" :class="'rating-' + gameState.getRating()">
          {{ gameState.getRating() }}
        </div>
      </div>

      <div class="hud-divider"></div>

      <div class="stats-grid">
        <div class="stat-item"><span class="stat-val">{{ gameState.score }}</span><span class="stat-lbl">得分</span></div>
        <div class="stat-item"><span class="stat-val">{{ gameState.kills }}</span><span class="stat-lbl">照中</span></div>
        <div class="stat-item"><span class="stat-val">{{ gameState.maxCombo }}x</span><span class="stat-lbl">最高连击</span></div>
        <div class="stat-item"><span class="stat-val">{{ gameState.getAccuracy() }}%</span><span class="stat-lbl">命中率</span></div>
      </div>

      <!-- 成就 -->
      <div v-if="gameState.getJustUnlocked().length > 0">
        <div class="hud-divider"></div>
        <p class="section-label">🏆 新成就解锁！</p>
        <div v-for="a in gameState.getJustUnlocked()" :key="a.id" class="achievement-item">
          <span class="ach-icon">{{ a.icon }}</span>
          <span class="ach-name">{{ a.name }}</span>
        </div>
      </div>

      <!-- 排行榜 -->
      <div class="hud-divider"></div>
      <p class="section-label">📋 排行榜</p>
      <div class="leaderboard">
        <div v-for="(e, i) in gameState.getLeaderboard().slice(0, 5)" :key="i" class="lb-row" :class="{ highlight: e.score === gameState.score }">
          <span class="lb-rank">{{ i + 1 }}</span>
          <span class="lb-score">{{ e.score }}</span>
          <span class="lb-detail">{{ e.kills }}杀 {{ e.combo }}x {{ e.won ? '🏆' : '' }}</span>
        </div>
      </div>

      <div class="hud-divider"></div>

      <div class="gameover-actions">
        <button class="btn btn-primary" @click="$emit('restart')">再来一局</button>
        <button class="btn btn-share" @click="shareCard">📤 分享成绩</button>
        <button class="btn btn-secondary" @click="$emit('backToMenu')">返回主页</button>
      </div>
    </div>

    <canvas ref="shareCanvas" style="display:none" width="600" height="400"></canvas>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import laughGif from '../assets/picture/奶龙大笑.gif'

const props = defineProps({
  gameState: { type: Object, required: true },
  visible: { type: Boolean, default: true }
})
defineEmits(['restart', 'backToMenu'])

const shareCanvas = ref(null)

function shareCard() {
  const canvas = shareCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const gs = props.gameState
  const w = 600, h = 400

  ctx.fillStyle = '#000a10'
  ctx.fillRect(0, 0, w, h)
  for (let y = 0; y < h; y += 4) {
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.fillRect(0, y, w, 2)
  }
  ctx.fillStyle = '#00ff41'
  ctx.font = 'bold 36px monospace'
  ctx.textAlign = 'center'
  ctx.shadowColor = 'rgba(0,255,65,0.6)'
  ctx.shadowBlur = 15
  ctx.fillText('奶 蛙 之 森', w / 2, 55)
  ctx.shadowBlur = 0
  ctx.fillStyle = gs.getRating() === 'S' ? '#ffaa00' : '#00ff41'
  ctx.font = 'bold 80px monospace'
  ctx.fillText(gs.getRating(), w / 2, 150)
  ctx.fillStyle = '#ccddcc'
  ctx.font = '18px monospace';
  [ `得分: ${gs.score}    照中: ${gs.kills}次`,
    `最高连击: ${gs.maxCombo}x    命中率: ${gs.getAccuracy()}%`,
    `结果: ${gs.won ? '胜利 ✨' : '失败 💀'}` ]
    .forEach((s, i) => ctx.fillText(s, w / 2, 210 + i * 32))
  ctx.fillStyle = 'rgba(0,255,65,0.4)'
  ctx.font = '14px monospace'
  ctx.fillText('naiwa forest · 听声辨位黑暗求生', w / 2, h - 30)

  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = '奶蛙之森-成绩.png'; a.click()
    URL.revokeObjectURL(url)
  })
}
</script>

<style scoped>
.gameover-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.9); display: flex;
  align-items: center; justify-content: center; z-index: 30;
  overflow-y: auto; padding: 20px 0;
}
.gameover-panel {
  background: rgba(0,5,10,0.95); border: 1px solid rgba(0,255,65,0.15);
  border-radius: 10px; padding: 24px 20px; max-width: 340px; width: 90%;
  text-align: center; animation: slideUp 0.4s ease-out; max-height: 90vh; overflow-y: auto;
}
.laugh-gif { width: 160px; margin-bottom: 8px; animation: gifPopIn 0.4s ease-out; }
.result-badge { margin-bottom: 4px; }
.result-title { font-size: 1.4rem; letter-spacing: 0.1em; margin: 4px 0; }
.result-badge.win .result-title { color: var(--hud-green); text-shadow: 0 0 12px rgba(0,255,65,0.4); }
.result-badge.lose .result-title { color: var(--hud-red); text-shadow: 0 0 12px rgba(255,51,51,0.4); }
.rating-badge {
  display: inline-block; width: 48px; height: 48px; line-height: 48px;
  border-radius: 50%; font-size: 1.8rem; font-weight: bold; font-family: monospace;
  border: 3px solid; margin-top: 4px;
}
.rating-S { color: #ffaa00; border-color: #ffaa00; text-shadow: 0 0 15px rgba(255,170,0,0.6); }
.rating-A { color: #00ff41; border-color: #00ff41; }
.rating-B { color: #88cc44; border-color: #88cc44; }
.rating-C { color: #cccc44; border-color: #cccc44; }
.rating-D { color: #884444; border-color: #884444; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 8px 0; }
.stat-item { text-align: center; }
.stat-val { display: block; font-size: 1.3rem; font-weight: bold; color: var(--hud-green); }
.stat-lbl { display: block; font-size: 0.7rem; color: var(--text-dim); letter-spacing: 0.1em; }
.section-label { font-size: 0.8rem; color: var(--hud-amber); letter-spacing: 0.1em; margin: 4px 0 6px; }
.achievement-item {
  display: flex; align-items: center; gap: 8px; padding: 5px 10px;
  background: rgba(255,170,0,0.08); border-radius: 4px; margin: 3px 0;
}
.ach-icon { font-size: 1.2rem; }
.ach-name { font-size: 0.85rem; color: var(--hud-amber); }
.leaderboard { text-align: left; }
.lb-row { display: flex; align-items: center; gap: 8px; padding: 4px 8px; font-size: 0.85rem; }
.lb-row.highlight { background: rgba(0,255,65,0.08); border-radius: 4px; }
.lb-rank { color: var(--hud-amber); font-weight: bold; width: 20px; }
.lb-score { color: var(--hud-green); font-weight: bold; width: 50px; }
.lb-detail { color: var(--text-dim); font-size: 0.75rem; }
.gameover-actions { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }
.btn { padding: 12px 20px; border-radius: 6px; font-family: inherit; font-size: 0.9rem; cursor: pointer; letter-spacing: 0.1em; transition: all 0.2s; }
.btn-primary { background: rgba(0,255,65,0.1); border: 2px solid var(--hud-green); color: var(--hud-green); }
.btn-primary:active { background: rgba(0,255,65,0.2); }
.btn-share { background: rgba(255,170,0,0.1); border: 2px solid var(--hud-amber); color: var(--hud-amber); }
.btn-share:active { background: rgba(255,170,0,0.2); }
.btn-secondary { background: none; border: 1px solid rgba(255,255,255,0.12); color: var(--text-dim); }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes gifPopIn { 0% { opacity: 0; transform: scale(0.3) rotate(-10deg); } 60% { transform: scale(1.15) rotate(3deg); } 100% { opacity: 1; transform: scale(1) rotate(0deg); } }
</style>
