<template>
  <Transition name="fade">
    <div v-if="showPrompt" class="landscape-prompt">
      <div class="prompt-content">
        <div class="prompt-icon">📱</div>
        <div class="prompt-rotate">
          <span class="rotate-arrow">↻</span>
        </div>
        <p class="prompt-text">请横屏游玩</p>
        <p class="prompt-sub">旋转手机以获得最佳体验</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showPrompt = ref(false)

function checkOrientation() {
  showPrompt.value = window.innerWidth < window.innerHeight
}

onMounted(() => {
  checkOrientation()
  window.addEventListener('resize', checkOrientation)
  window.addEventListener('orientationchange', () => {
    // orientationchange 后需要等布局更新
    setTimeout(checkOrientation, 100)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkOrientation)
  window.removeEventListener('orientationchange', checkOrientation)
})
</script>

<style scoped>
.landscape-prompt {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 3, 8, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  pointer-events: all;
}

.prompt-content {
  text-align: center;
  padding: 40px;
}

.prompt-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  animation: bounce 1.5s ease-in-out infinite;
}

.prompt-rotate {
  font-size: 2.5rem;
  color: var(--hud-green);
  margin-bottom: 20px;
  animation: rotateHint 2s ease-in-out infinite;
}

.rotate-arrow {
  display: inline-block;
}

.prompt-text {
  font-family: inherit;
  font-size: 1.4rem;
  color: var(--hud-green);
  text-shadow: 0 0 12px rgba(0, 255, 65, 0.5);
  letter-spacing: 0.15em;
  margin-bottom: 8px;
}

.prompt-sub {
  font-size: 0.9rem;
  color: var(--text-dim);
  letter-spacing: 0.1em;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes rotateHint {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  75% { transform: rotate(90deg); }
}

.fade-enter-active { transition: opacity 0.3s; }
.fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
