<template>
  <div class="scoreboard">
    <div class="score-box hud-panel">
      <span class="score-label">得分</span>
      <span class="score-value">{{ score }}</span>
    </div>

    <div class="time-box hud-panel" :class="{ dawn: isDawn }">
      <span class="time-label">{{ isDawn ? '🌅 黎明' : '🌙 时间' }}</span>
      <span class="time-value">{{ formattedTime }}</span>
    </div>

    <div class="kills-box">
      <span class="kills-icon">🔦</span>
      <span class="kills-value">{{ kills }}</span>
    </div>

    <!-- Combo弹出 -->
    <Transition name="combo-pop">
      <div v-if="combo > 1" class="combo-badge" :key="combo">
        <span class="combo-num">{{ combo }}x</span>
        <span class="combo-label">COMBO</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: { type: Number, default: 0 },
  timeRemaining: { type: Number, default: 60 },
  kills: { type: Number, default: 0 },
  combo: { type: Number, default: 0 }
})

// 3分钟 = 180秒 = 晚上6点到早上6点(12小时)
// 每秒对应 12*60/180 = 4 分钟游戏时间
const formattedTime = computed(() => {
  const elapsed = 180 - props.timeRemaining
  // 18:00 (6PM) 起始，经过 elapsed 秒 → elapsed/180*12 小时
  const gameHours = 18 + (elapsed / 180) * 12
  const h = Math.floor(gameHours) % 24
  const m = Math.floor((gameHours % 1) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
})

const isDawn = computed(() => {
  // 凌晨4点后接近天亮
  const elapsed = 180 - props.timeRemaining
  const gameHours = 18 + (elapsed / 180) * 12
  return gameHours >= 28 || gameHours <= 6 // 凌晨4点后(28=4AM) 或 6点前
})
</script>

<style scoped>
.scoreboard {
  position: fixed; top: 16px; left: 16px; right: 16px;
  display: flex; justify-content: space-between; align-items: flex-start;
  z-index: 15; pointer-events: none;
}
.score-box, .time-box { text-align: center; min-width: 70px; }
.score-label, .time-label {
  display: block; font-size: 0.65rem; color: var(--text-dim);
  text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 2px;
}
.score-value { display: block; font-size: 1.4rem; font-weight: bold; color: var(--hud-green); text-shadow: 0 0 10px rgba(0,255,65,0.4); }
.time-value { display: block; font-size: 1.4rem; font-weight: bold; color: var(--hud-green); text-shadow: 0 0 10px rgba(0,255,65,0.4); }
.time-box.dawn .time-value { color: #ffcc66; text-shadow: 0 0 12px rgba(255,200,100,0.6); }
.time-box.dawn .time-label { color: #ffcc66; }
.kills-box { text-align: center; min-width: 40px; }
.kills-icon { font-size: 1rem; display: block; }
.kills-value { font-size: 1.1rem; font-weight: bold; color: var(--hud-amber); text-shadow: 0 0 8px rgba(255,170,0,0.3); }

/* Combo Badge */
.combo-badge {
  position: fixed; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; pointer-events: none;
}
.combo-num {
  display: block; font-size: 2.5rem; font-weight: bold;
  color: var(--hud-amber); letter-spacing: 0.05em;
  text-shadow: 0 0 20px rgba(255,170,0,0.6), 0 0 40px rgba(255,100,0,0.3);
}
.combo-label {
  display: block; font-size: 0.8rem; letter-spacing: 0.3em;
  color: rgba(255,170,0,0.7);
}
.combo-pop-enter-active { animation: comboIn 0.5s ease-out; }
.combo-pop-leave-active { animation: comboIn 0.3s ease-in reverse; }
@keyframes comboIn {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}
</style>
