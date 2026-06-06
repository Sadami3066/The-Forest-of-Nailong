<template>
  <div class="gameover-overlay" v-if="visible">
    <div class="gameover-panel">
      <!-- 输了时显示奶龙大笑 -->
      <img v-if="!gameState.won" :src="laughGif" class="laugh-gif" alt="" />

      <h2 class="gameover-title" :class="gameState.won ? 'win' : 'lose'">
        {{ gameState.won ? '✨ 你赢了！' : '💀 你输了' }}
      </h2>
      <p class="gameover-sub">{{ gameState.won ? '成功在黑暗中存活了60秒' : '奶龙找到了你...' }}</p>
      <div class="hud-divider"></div>

      <div class="final-stats">
        <div class="stat-row main-stat">
          <span class="stat-label">照中次数</span>
          <span class="stat-value">{{ gameState.score / 100 }}</span>
        </div>
      </div>

      <div class="hud-divider"></div>

      <div class="gameover-actions">
        <button class="btn btn-primary" @click="$emit('restart')">再来一次</button>
        <button class="btn btn-secondary" @click="$emit('backToMenu')">返回主页</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import laughGif from '../assets/picture/奶龙大笑.gif'

defineProps({
  gameState: { type: Object, required: true },
  visible: { type: Boolean, default: true }
})
defineEmits(['restart', 'backToMenu'])
</script>

<style scoped>
.gameover-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.88); display: flex;
  align-items: center; justify-content: center; z-index: 30;
}
.laugh-gif {
  width: 180px; height: auto; image-rendering: pixelated;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 20px rgba(255,50,50,0.5));
  animation: gifPopIn 0.4s ease-out;
}
.gameover-panel {
  background: rgba(0,5,10,0.95); border: 1px solid rgba(0,255,65,0.2);
  border-radius: 8px; padding: 28px; max-width: 320px; width: 90%;
  text-align: center; animation: slideUp 0.4s ease-out;
  display: flex; flex-direction: column; align-items: center;
}
.gameover-title { font-size: 1.8rem; letter-spacing: 0.15em; margin-bottom: 4px; }
.gameover-title.win { color: var(--hud-green); text-shadow: 0 0 15px rgba(0,255,65,0.4); }
.gameover-title.lose { color: var(--hud-red); text-shadow: 0 0 15px rgba(255,51,51,0.4); }
.gameover-sub { font-size: 0.85rem; color: var(--text-dim); }
.final-stats { margin: 12px 0; }
.stat-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; }
.stat-label { color: var(--text-dim); }
.stat-value { font-weight: bold; color: var(--hud-amber); font-size: 1.5rem; text-shadow: 0 0 10px rgba(255,170,0,0.4); }
.gameover-actions { display: flex; flex-direction: column; gap: 10px; margin-top: 8px; }
.btn { padding: 14px 20px; border: none; border-radius: 6px; font-family: inherit; font-size: 1rem; cursor: pointer; letter-spacing: 0.1em; transition: all 0.2s ease; }
.btn-primary { background: rgba(0,255,65,0.1); border: 2px solid var(--hud-green); color: var(--hud-green); }
.btn-primary:active { background: rgba(0,255,65,0.2); transform: scale(0.97); }
.btn-secondary { background: none; border: 1px solid rgba(255,255,255,0.15); color: var(--text-dim); }
.btn-secondary:active { background: rgba(255,255,255,0.05); }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes gifPopIn {
  0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
  60% { transform: scale(1.15) rotate(3deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}
</style>
