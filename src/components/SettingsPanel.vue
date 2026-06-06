<template>
  <div class="settings-overlay" v-if="visible" @click.self="$emit('close')">
    <div class="settings-panel">
      <h2 class="panel-title">⚙️ 设置</h2>
      <div class="hud-divider"></div>

      <div class="slider-group" v-for="s in sliders" :key="s.key">
        <div class="slider-header">
          <span class="slider-icon">{{ s.icon }}</span>
          <span class="slider-label">{{ s.label }}</span>
          <span class="slider-value">{{ Math.round(s.value * 100) }}%</span>
        </div>
        <input type="range" min="0" max="100" :value="Math.round(s.value * 100)"
          class="hud-slider" @input="onChange(s.key, $event)" />
      </div>

      <button class="close-btn" @click="$emit('close')">关 闭</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  volumes: { type: Object, default: () => ({ master: 0.7, nailong: 0.55, heartbeat: 0.7, bgm: 0.5, sfx: 0.8 }) }
})

const emit = defineEmits(['update', 'close'])

const sliders = reactive([
  { key: 'master', icon: '🔊', label: '主音量', value: props.volumes.master },
  { key: 'nailong', icon: '👹', label: '奶龙笑声', value: props.volumes.nailong },
  { key: 'heartbeat', icon: '💓', label: '心跳声', value: props.volumes.heartbeat },
  { key: 'bgm', icon: '🎵', label: '背景音乐', value: props.volumes.bgm },
  { key: 'sfx', icon: '💥', label: 'UI音效', value: props.volumes.sfx }
])

function onChange(key, event) {
  const val = parseInt(event.target.value) / 100
  const s = sliders.find(x => x.key === key)
  if (s) s.value = val
  emit('update', { key, value: val })
}
</script>

<style scoped>
.settings-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.85); display: flex;
  align-items: center; justify-content: center; z-index: 50;
}
.settings-panel {
  background: rgba(0,5,10,0.95); border: 1px solid rgba(0,255,65,0.2);
  border-radius: 10px; padding: 28px 24px; max-width: 340px; width: 88%;
  animation: slideUp 0.3s ease-out;
}
.panel-title { font-size: 1.3rem; color: var(--hud-green); letter-spacing: 0.1em; text-align: center; margin-bottom: 4px; }
.slider-group { margin: 14px 0; }
.slider-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.slider-icon { font-size: 1rem; }
.slider-label { font-size: 0.85rem; color: var(--text-primary); flex: 1; }
.slider-value { font-size: 0.8rem; color: var(--hud-green-dim); min-width: 36px; text-align: right; }
.hud-slider {
  -webkit-appearance: none; appearance: none;
  width: 100%; height: 6px; border-radius: 3px;
  background: rgba(0,255,65,0.15); outline: none;
}
.hud-slider::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--hud-green); cursor: pointer;
  box-shadow: 0 0 10px rgba(0,255,65,0.5);
}
.close-btn {
  display: block; width: 100%; margin-top: 16px; padding: 12px;
  background: none; border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px; color: var(--text-dim);
  font-family: inherit; font-size: 0.95rem; cursor: pointer; letter-spacing: 0.1em;
}
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>
