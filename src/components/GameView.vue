<template>
  <div class="game-view">
    <!-- Three.js 渲染画布 - 始终在DOM中 -->
    <canvas id="game-canvas" ref="canvasRef"></canvas>

    <!-- 奶蛙GIF弹出 -->
    <NaiwaGif :type="gifType" :visible="gifType !== 'none'" />

    <!-- HUD覆盖层 -->
    <div class="game-overlay">
      <ScoreBoard
        :score="gameState.score"
        :time-remaining="gameState.timeRemaining"
        :kills="gameState.kills"
        :combo="gameState.combo"
      />
      <Crosshair />
      <FireButton @fire="$emit('fire')" />
    </div>

    <!-- 游戏结束弹窗 -->
    <GameOverModal
      v-if="gameState.state === 'game_over'"
      :game-state="gameState"
      :visible="true"
      @restart="$emit('restart')"
      @back-to-menu="$emit('backToMenu')"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Crosshair from './Crosshair.vue'
import FireButton from './FireButton.vue'
import ScoreBoard from './ScoreBoard.vue'
import GameOverModal from './GameOverModal.vue'
import NaiwaGif from './NaiwaGif.vue'

const props = defineProps({
  gameState: { type: Object, required: true },
  gifType: { type: String, default: 'none' }
})

defineEmits(['fire', 'restart', 'backToMenu'])

const canvasRef = ref(null)

function sizeCanvas() {
  const canvas = canvasRef.value
  if (canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.cssText = 'display:block;position:fixed;top:0;left:0;z-index:1'
  }
}

let _resizeTimer = null
function onResize() {
  clearTimeout(_resizeTimer)
  _resizeTimer = setTimeout(sizeCanvas, 200)
}

onMounted(() => {
  sizeCanvas()
  window.addEventListener('resize', onResize)
  window.addEventListener('orientationchange', () => setTimeout(sizeCanvas, 300))
  console.log('canvas mounted:', canvasRef.value?.width, 'x', canvasRef.value?.height)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('orientationchange', onResize)
})
</script>

<style scoped>
.game-view {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000a10;
}
</style>
