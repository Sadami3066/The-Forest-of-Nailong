<template>
  <Transition name="gif-pop">
    <div v-if="visible" class="nailong-gif" :class="type">
      <img :src="gifSrc" alt="" />
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import cryGif from '../assets/picture/奶龙哭泣.gif'
import laughGif from '../assets/picture/奶龙大笑.gif'

const props = defineProps({
  type: { type: String, default: 'none' },
  visible: { type: Boolean, default: false }
})

const gifSrc = computed(() => {
  if (props.type === 'kill') return cryGif
  return laughGif  // miss / lose
})
</script>

<style scoped>
.nailong-gif {
  position: fixed; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 25; pointer-events: none;
}
.nailong-gif img { width: 200px; height: auto; image-rendering: pixelated; }
.kill img { filter: drop-shadow(0 0 20px rgba(255,50,50,0.6)); }
.miss img { filter: drop-shadow(0 0 20px rgba(255,170,0,0.6)); }
.gif-pop-enter-active { animation: gifPopIn 0.3s ease-out; }
.gif-pop-leave-active { animation: gifPopIn 0.2s ease-in reverse; }
@keyframes gifPopIn {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(-10deg); }
  60% { transform: translate(-50%, -50%) scale(1.15) rotate(3deg); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
}
</style>
