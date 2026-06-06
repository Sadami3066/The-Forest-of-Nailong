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

    <canvas ref="shareCanvas" style="display:none" width="800" height="500"></canvas>
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
  const w = 800, h = 500

  // === 背景 ===
  // 暗绿渐变
  const bg = ctx.createLinearGradient(0, 0, 0, h)
  bg.addColorStop(0, '#000a10'); bg.addColorStop(0.5, '#020f08'); bg.addColorStop(1, '#000508')
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h)

  // 扫描线
  for (let y = 0; y < h; y += 5) {
    ctx.fillStyle = 'rgba(0,0,0,0.04)'; ctx.fillRect(0, y, w, 3)
  }

  // 边框发光
  ctx.strokeStyle = 'rgba(0,255,65,0.3)'; ctx.lineWidth = 3
  ctx.strokeRect(10, 10, w - 20, h - 20)
  ctx.strokeStyle = 'rgba(0,255,65,0.08)'; ctx.lineWidth = 1
  ctx.strokeRect(18, 18, w - 36, h - 36)

  // 四角装饰
  const corners = [[30,30],[w-30,30],[30,h-30],[w-30,h-30]]
  corners.forEach(([cx, cy]) => {
    ctx.fillStyle = 'rgba(0,255,65,0.5)'; ctx.fillRect(cx-15, cy-2, 15, 4)
    ctx.fillRect(cx-2, cy-15, 4, 15)
  })

  // === 标题 ===
  ctx.textAlign = 'center'
  // 顶部装饰线
  ctx.strokeStyle = 'rgba(0,255,65,0.15)'; ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(w/2-150, 60); ctx.lineTo(w/2+150, 60); ctx.stroke()

  ctx.fillStyle = '#00ff41'
  ctx.font = 'bold 40px "Courier New", monospace'
  ctx.shadowColor = 'rgba(0,255,65,0.6)'; ctx.shadowBlur = 20
  ctx.fillText('奶 蛙 之 森', w / 2, 85)
  ctx.shadowBlur = 0

  // 副标题
  ctx.fillStyle = 'rgba(0,255,65,0.35)'
  ctx.font = '16px "Courier New", monospace'
  ctx.fillText('—— 听声辨位 · 黑暗求生 ——', w / 2, 110)

  // === 评级 ===
  const rating = gs.getRating()
  const ratingColors = { S: '#ffaa00', A: '#00ff41', B: '#88cc44', C: '#cccc44', D: '#884444' }
  const rColor = ratingColors[rating] || '#00ff41'

  // 评级大圆
  ctx.beginPath(); ctx.arc(w / 2, 195, 55, 0, Math.PI * 2)
  ctx.strokeStyle = rColor; ctx.lineWidth = 4; ctx.stroke()
  ctx.beginPath(); ctx.arc(w / 2, 195, 48, 0, Math.PI * 2)
  ctx.strokeStyle = rColor + '44'; ctx.lineWidth = 1; ctx.stroke()

  ctx.fillStyle = rColor; ctx.font = 'bold 72px "Courier New", monospace'
  ctx.shadowColor = rColor + '88'; ctx.shadowBlur = 25
  ctx.fillText(rating, w / 2, 218)
  ctx.shadowBlur = 0

  // 评级标签
  const ratingNames = { S: '传奇猎手', A: '精英猎手', B: '熟练猎手', C: '新手猎手', D: '见习猎手' }
  ctx.fillStyle = rColor
  ctx.font = '14px "Courier New", monospace'
  ctx.fillText(ratingNames[rating] || '', w / 2, 260)

  // === 数据面板 ===
  const panelY = 285
  // 面板背景
  ctx.fillStyle = 'rgba(0,15,8,0.6)'; ctx.strokeStyle = 'rgba(0,255,65,0.1)'; ctx.lineWidth = 1
  ctx.beginPath(); ctx.roundRect(w/2-240, panelY, 480, 105, 8); ctx.fill(); ctx.stroke()

  // 分隔线
  const dataItems = [
    { label: '得分', value: gs.score, color: '#ffaa00' },
    { label: '照中', value: `${gs.kills}次`, color: '#00ff41' },
    { label: '连击', value: `${gs.maxCombo}x`, color: '#ffaa00' },
    { label: '命中率', value: `${gs.getAccuracy()}%`, color: '#00ff41' }
  ]
  const itemW = 480 / dataItems.length
  dataItems.forEach((d, i) => {
    const x = w/2 - 240 + itemW * i + itemW / 2
    ctx.fillStyle = d.color; ctx.font = 'bold 28px "Courier New", monospace'
    ctx.textAlign = 'center'; ctx.fillText(d.value, x, panelY + 42)
    ctx.fillStyle = 'rgba(200,220,200,0.5)'; ctx.font = '12px "Courier New", monospace'
    ctx.fillText(d.label, x, panelY + 64)
    // 竖分隔线
    if (i < dataItems.length - 1) {
      ctx.strokeStyle = 'rgba(0,255,65,0.08)'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(x + itemW/2, panelY + 10); ctx.lineTo(x + itemW/2, panelY + 95); ctx.stroke()
    }
  })

  // === 结果标签 ===
  const resultY = 415
  const wonBadge = gs.won
  ctx.fillStyle = wonBadge ? 'rgba(0,255,65,0.1)' : 'rgba(255,50,50,0.1)'
  ctx.strokeStyle = wonBadge ? 'rgba(0,255,65,0.3)' : 'rgba(255,50,50,0.3)'
  ctx.beginPath(); ctx.roundRect(w/2-100, resultY, 200, 36, 18); ctx.fill(); ctx.stroke()
  ctx.fillStyle = wonBadge ? '#00ff41' : '#ff3333'
  ctx.font = 'bold 18px "Courier New", monospace'
  ctx.fillText(wonBadge ? '✨ 生 还 ✨' : '💀 阵 亡 💀', w / 2, resultY + 26)

  // === 底部 ===
  ctx.fillStyle = 'rgba(0,255,65,0.2)'
  ctx.font = '12px "Courier New", monospace'
  ctx.fillText('NAIWA FOREST · SURVIVAL HORROR', w / 2, h - 25)

  // 底部装饰
  ctx.strokeStyle = 'rgba(0,255,65,0.1)'; ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(w/2-120, h-40); ctx.lineTo(w/2+120, h-40); ctx.stroke()

  // === 下载 ===
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
