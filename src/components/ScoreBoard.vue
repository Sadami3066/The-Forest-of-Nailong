<template>
  <div class="scoreboard">
    <!-- 得分 -->
    <div class="score-box hud-panel">
      <span class="score-label">得分</span>
      <span class="score-value">{{ score }}</span>
    </div>

    <!-- 计时 -->
    <div class="time-box hud-panel" :class="{ urgent: timeRemaining <= 10 }">
      <span class="time-label">剩余</span>
      <span class="time-value">{{ formattedTime }}</span>
    </div>

    <!-- 击杀数 -->
    <div class="kills-box">
      <span class="kills-icon">💀</span>
      <span class="kills-value">{{ kills }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: { type: Number, default: 0 },
  timeRemaining: { type: Number, default: 60 },
  kills: { type: Number, default: 0 }
})

const formattedTime = computed(() => {
  const m = Math.floor(props.timeRemaining / 60)
  const s = props.timeRemaining % 60
  return `${m}:${String(s).padStart(2, '0')}`
})
</script>

<style scoped>
.scoreboard {
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 15;
  pointer-events: none;
}

.score-box, .time-box {
  text-align: center;
  min-width: 80px;
}

.score-label, .time-label {
  display: block;
  font-size: 0.7rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 2px;
}

.score-value {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--hud-green);
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.4);
}

.time-value {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--hud-green);
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.4);
}

.time-box.urgent .time-value {
  color: var(--hud-red);
  text-shadow: 0 0 10px rgba(255, 51, 51, 0.5);
  animation: pulse-green 0.5s ease-in-out infinite;
}

.kills-box {
  text-align: center;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.kills-icon {
  font-size: 1.2rem;
}

.kills-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--hud-amber);
  text-shadow: 0 0 8px rgba(255, 170, 0, 0.3);
}
</style>
