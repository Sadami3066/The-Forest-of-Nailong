<template>
  <div class="flash-container">
    <button
      class="flash-btn"
      :class="{ cooldown: isCooldown }"
      @pointerdown.stop.prevent="handleFlash"
      @touchstart.stop.prevent="handleFlash"
    >
      <span class="flash-icon">🔦</span>
      <span class="flash-label">{{ isCooldown ? '...' : '手电' }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['fire'])
const isCooldown = ref(false)
const cooldownTime = 600

function handleFlash() {
  if (isCooldown.value) return
  emit('fire')
  isCooldown.value = true
  setTimeout(() => { isCooldown.value = false }, cooldownTime)
}
</script>

<style scoped>
.flash-container {
  position: fixed; bottom: calc(40px + var(--safe-bottom));
  left: 50%; transform: translateX(-50%); z-index: 15;
}
.flash-btn {
  width: 80px; height: 80px; border-radius: 50%;
  border: 3px solid var(--hud-amber);
  background: rgba(0,3,8,0.7); cursor: pointer;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 2px;
  transition: all 0.1s ease;
  box-shadow: 0 0 20px rgba(255,170,0,0.25), inset 0 0 15px rgba(255,170,0,0.04);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.flash-btn:active:not(.cooldown) {
  transform: scale(0.92);
  background: rgba(255,170,0,0.2);
  box-shadow: 0 0 40px rgba(255,170,0,0.5), inset 0 0 25px rgba(255,170,0,0.1);
}
.flash-btn.cooldown { border-color: rgba(255,170,0,0.3); cursor: not-allowed; box-shadow: none; }
.flash-icon { font-size: 1.4rem; }
.flash-label { font-family: inherit; font-size: 0.75rem; color: var(--hud-amber); letter-spacing: 0.1em; }
.cooldown .flash-label { color: rgba(255,170,0,0.4); }
</style>
