<template>
  <div class="tutorial-overlay" v-if="visible">
    <div class="tutorial-card">
      <!-- 步骤指示器 -->
      <div class="step-indicator">
        <span v-for="i in steps.length" :key="i"
          class="step-dot" :class="{ active: i === currentStep, done: i < currentStep }"></span>
      </div>

      <!-- 图标 -->
      <div class="step-icon">{{ steps[currentStep - 1]?.icon }}</div>

      <!-- 标题 -->
      <h3 class="step-title">{{ steps[currentStep - 1]?.title }}</h3>

      <!-- 描述 -->
      <p class="step-desc">{{ steps[currentStep - 1]?.desc }}</p>

      <!-- 按钮 -->
      <div class="tutorial-actions">
        <button v-if="currentStep > 1" class="btn btn-ghost" @click="prev">上一步</button>
        <button v-if="currentStep < steps.length" class="btn btn-primary" @click="next">
          {{ currentStep === steps.length - 1 ? '开始游戏' : '下一步' }}
        </button>
        <button v-if="currentStep === steps.length" class="btn btn-primary" @click="$emit('start')">
          进 入 森 林
        </button>
      </div>

      <button class="skip-btn" @click="$emit('skip')">跳过教程</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['start', 'skip'])

const props = defineProps({
  visible: { type: Boolean, default: false }
})

const currentStep = ref(1)

const steps = [
  {
    icon: '🌲', title: '欢迎来到黑暗森林',
    desc: '你正站在森林的中心。四周一片漆黑，只能隐约看到树木的轮廓。奶龙就藏在这片森林的某个角落...'
  },
  {
    icon: '👂', title: '用耳朵来寻找',
    desc: '奶龙会不断发出笑声。转动手机或移动鼠标，仔细听笑声传来的方向。戴上耳机可以获得最精准的3D空间音效。'
  },
  {
    icon: '🎯', title: '对准声音的方向',
    desc: '听到声音后，将屏幕中央的准星对准声音传来的方向。你无法看到奶龙——只能依靠听觉来判断它的位置。'
  },
  {
    icon: '🔦', title: '打开手电筒',
    desc: '当你确定奶龙就在那个方向时，点击底部的手电筒按钮（或按空格键）。照中奶龙它会暂时消失，并在新的位置重生。'
  },
  {
    icon: '⏱️', title: '坚持60秒',
    desc: '奶龙会一步步向你靠近。你需要在黑暗中坚持60秒。心跳声会随奶龙接近而加快——那是你唯一的警示。被奶龙碰到，游戏就结束了。'
  }
]

function next() {
  if (currentStep.value < steps.length) currentStep.value++
}
function prev() {
  if (currentStep.value > 1) currentStep.value--
}
</script>

<style scoped>
.tutorial-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,3,8,0.93); display: flex;
  align-items: center; justify-content: center; z-index: 40;
}
.tutorial-card {
  background: rgba(0,8,15,0.95); border: 1px solid rgba(0,255,65,0.15);
  border-radius: 12px; padding: 32px 24px;
  max-width: 340px; width: 88%; text-align: center;
  animation: fadeUp 0.4s ease-out;
}
.step-indicator { display: flex; justify-content: center; gap: 8px; margin-bottom: 20px; }
.step-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: rgba(255,255,255,0.1); transition: all 0.3s;
}
.step-dot.active { background: var(--hud-green); box-shadow: 0 0 8px rgba(0,255,65,0.5); width: 10px; height: 10px; }
.step-dot.done { background: var(--hud-green-dim); }
.step-icon { font-size: 3rem; margin-bottom: 12px; }
.step-title { font-size: 1.2rem; color: var(--hud-green); letter-spacing: 0.08em; margin-bottom: 10px; text-shadow: 0 0 10px rgba(0,255,65,0.3); }
.step-desc { font-size: 0.88rem; color: rgba(180,200,180,0.75); line-height: 1.6; letter-spacing: 0.03em; }
.tutorial-actions { display: flex; gap: 10px; justify-content: center; margin-top: 20px; }
.btn { padding: 12px 24px; border-radius: 6px; font-family: inherit; font-size: 0.95rem; cursor: pointer; letter-spacing: 0.1em; transition: all 0.2s; }
.btn-primary { background: rgba(0,255,65,0.1); border: 2px solid var(--hud-green); color: var(--hud-green); }
.btn-primary:active { background: rgba(0,255,65,0.2); }
.btn-ghost { background: none; border: 1px solid rgba(255,255,255,0.12); color: var(--text-dim); }
.skip-btn { margin-top: 14px; background: none; border: none; color: rgba(255,255,255,0.2); font-family: inherit; font-size: 0.75rem; cursor: pointer; letter-spacing: 0.1em; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
