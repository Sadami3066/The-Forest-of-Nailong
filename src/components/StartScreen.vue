<template>
  <div class="home-screen">
    <!-- 背景图片 -->
    <div class="bg-image" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <div class="bg-fog"></div>
    <div class="bg-particles">
      <span v-for="i in 12" :key="i" class="float-particle" :style="particleStyle(i)"></span>
    </div>

    <div class="home-content">
      <div class="deco-line top"></div>

      <div class="title-block">
        <h1 class="title-main">奶 蛙 之 森</h1>
        <p class="title-sub">— 暗 黑 森 林 · 听 声 辨 位 —</p>
      </div>

      <div class="section-divider">
        <span class="divider-dot"></span>
        <span class="divider-line"></span>
        <span class="divider-diamond">◆</span>
        <span class="divider-line"></span>
        <span class="divider-dot"></span>
      </div>

      <div class="menu-buttons">
        <button class="menu-btn primary" @click="$emit('tutorial')">
          <span class="menu-btn-icon">📖</span>
          <span class="menu-btn-text">新手教程</span>
          <span class="menu-btn-hint">了解游戏玩法</span>
        </button>
        <button class="menu-btn danger" @click="$emit('start')">
          <span class="menu-btn-icon">🌲</span>
          <span class="menu-btn-text">进入森林</span>
          <span class="menu-btn-hint">开始游戏</span>
        </button>
        <button class="menu-btn ghost" @click="$emit('settings')">
          <span class="menu-btn-icon">⚙️</span>
          <span class="menu-btn-text">设置</span>
          <span class="menu-btn-hint">音量调节</span>
        </button>
      </div>

      <div v-if="bestScore > 0" class="record-badge">
        <span class="record-star">★</span>
        <span class="record-label">最佳记录</span>
        <span class="record-value">{{ bestScore }}</span>
      </div>

      <div class="deco-line bottom"></div>
      <p class="footer-hint">🎧 佩戴耳机 · 手机陀螺仪 · 空格键发射</p>
    </div>
  </div>
</template>

<script setup>
import bgImage from '../assets/picture/home.png'

defineProps({ bestScore: { type: Number, default: 0 } })
defineEmits(['start', 'tutorial', 'settings'])

function particleStyle(i) {
  return {
    left: `${10 + (i * 37) % 80}%`,
    animationDelay: `${(i * 0.7) % 5}s`,
    animationDuration: `${6 + (i * 1.3) % 8}s`,
    width: `${2 + (i % 3)}px`,
    height: `${2 + (i % 3)}px`
  }
}
</script>

<style scoped>
.home-screen {
  width: 100%; height: 100%; position: relative;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.bg-image {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-size: cover; background-position: center; background-repeat: no-repeat;
  filter: brightness(0.65) saturate(0.8);
  pointer-events: none;
}
.bg-fog {
  position: absolute; top: 0; left: 0; width: 200%; height: 100%;
  background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.004) 3px, rgba(0,255,65,0.004) 6px);
  animation: fogDrift 20s linear infinite; pointer-events: none;
}
@keyframes fogDrift { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.float-particle {
  position: absolute; bottom: -10px; background: rgba(0,255,65,0.15);
  border-radius: 50%; animation: floatUp linear infinite; pointer-events: none;
}
@keyframes floatUp {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 1; } 90% { opacity: 0.3; }
  100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
}
.home-content { position: relative; z-index: 1; text-align: center; padding: 20px; max-width: 360px; width: 100%; }
.deco-line { height: 1px; margin: 0 auto; background: linear-gradient(90deg, transparent, rgba(0,255,65,0.15), transparent); }
.deco-line.top { width: 80%; margin-bottom: 16px; }
.deco-line.bottom { width: 60%; margin-top: 16px; }
.title-main {
  font-size: 2.6rem; letter-spacing: 0.22em;
  background: linear-gradient(180deg, #00ff41 0%, #005520 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 0 30px rgba(0,255,65,0.5)) drop-shadow(0 0 60px rgba(0,255,65,0.2));
  animation: titleBreathe 3s ease-in-out infinite;
}
@keyframes titleBreathe {
  0%, 100% { filter: drop-shadow(0 0 30px rgba(0,255,65,0.5)) drop-shadow(0 0 60px rgba(0,255,65,0.2)); }
  50% { filter: drop-shadow(0 0 45px rgba(0,255,65,0.7)) drop-shadow(0 0 90px rgba(0,255,65,0.3)); }
}
.title-sub { font-size: 0.78rem; letter-spacing: 0.3em; color: var(--hud-green-dim); margin-top: 6px; }
.section-divider { display: flex; align-items: center; justify-content: center; gap: 8px; margin: 14px 0; }
.divider-line { width: 35px; height: 1px; background: rgba(0,255,65,0.15); }
.divider-dot { width: 3px; height: 3px; background: rgba(0,255,65,0.2); border-radius: 50%; }
.divider-diamond { color: rgba(0,255,65,0.2); font-size: 0.5rem; }
.menu-buttons { display: flex; flex-direction: column; gap: 10px; }
.menu-btn {
  display: flex; align-items: center; gap: 12px; width: 100%;
  padding: 14px 18px; border-radius: 8px; cursor: pointer;
  font-family: inherit; text-align: left; transition: all 0.2s;
}
.menu-btn.primary { background: rgba(0,30,15,0.5); border: 1px solid rgba(0,255,65,0.3); }
.menu-btn.primary:active { background: rgba(0,40,20,0.6); border-color: rgba(0,255,65,0.5); }
.menu-btn.danger { background: rgba(20,5,0,0.5); border: 1px solid rgba(255,100,50,0.3); }
.menu-btn.danger:active { background: rgba(30,10,0,0.6); border-color: rgba(255,100,50,0.5); }
.menu-btn.ghost { background: rgba(10,10,10,0.4); border: 1px solid rgba(255,255,255,0.08); }
.menu-btn.ghost:active { background: rgba(20,20,20,0.5); border-color: rgba(255,255,255,0.15); }
.menu-btn-icon { font-size: 1.5rem; width: 36px; text-align: center; flex-shrink: 0; }
.menu-btn-text { font-size: 1.05rem; letter-spacing: 0.12em; flex: 1; }
.menu-btn.primary .menu-btn-text { color: var(--hud-green); text-shadow: 0 0 8px rgba(0,255,65,0.3); }
.menu-btn.danger .menu-btn-text { color: #ff8855; text-shadow: 0 0 8px rgba(255,100,50,0.3); }
.menu-btn.ghost .menu-btn-text { color: var(--text-dim); }
.menu-btn-hint { font-size: 0.7rem; color: var(--text-dim); opacity: 0.6; letter-spacing: 0.08em; }
.record-badge { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 6px 20px; border: 1px solid rgba(255,170,0,0.2); border-radius: 20px; background: rgba(20,10,0,0.3); }
.record-star { color: var(--hud-amber); font-size: 0.9rem; }
.record-label { font-size: 0.75rem; color: var(--text-dim); letter-spacing: 0.1em; }
.record-value { font-size: 1.1rem; color: var(--hud-amber); font-weight: bold; text-shadow: 0 0 8px rgba(255,170,0,0.3); }
.footer-hint { margin-top: 10px; font-size: 0.7rem; color: rgba(100,140,100,0.35); letter-spacing: 0.05em; }
</style>
