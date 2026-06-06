<template>
  <div class="home-screen">
    <!-- 背景暗纹 -->
    <div class="bg-ambient"></div>
    <div class="bg-fog"></div>
    <div class="bg-particles">
      <span v-for="i in 12" :key="i" class="float-particle" :style="particleStyle(i)"></span>
    </div>

    <!-- 主内容 -->
    <div class="home-content">
      <!-- 顶部装饰线 -->
      <div class="deco-line top"></div>

      <!-- 标题 -->
      <div class="title-block">
        <h1 class="title-main">射 杀 奶 龙</h1>
        <p class="title-sub">— 暗 黑 森 林 · 听 声 辨 位 —</p>
      </div>

      <!-- 分隔 -->
      <div class="section-divider">
        <span class="divider-dot"></span>
        <span class="divider-line"></span>
        <span class="divider-diamond">◆</span>
        <span class="divider-line"></span>
        <span class="divider-dot"></span>
      </div>

      <!-- 操作提示 -->
      <div class="guide-box">
        <div class="guide-row">
          <span class="guide-icon">👂</span>
          <span class="guide-text">聆听森林中的笑声</span>
        </div>
        <div class="guide-row">
          <span class="guide-icon">🔦</span>
          <span class="guide-text">手电筒照向声音来源</span>
        </div>
        <div class="guide-row">
          <span class="guide-icon">⏱️</span>
          <span class="guide-text">坚持 60 秒逃离黑暗</span>
        </div>
      </div>

      <!-- 最佳成绩 -->
      <div v-if="bestScore > 0" class="record-badge">
        <span class="record-star">★</span>
        <span class="record-label">最佳记录</span>
        <span class="record-value">{{ bestScore }}</span>
      </div>

      <!-- 开始按钮 -->
      <button class="enter-btn" @click="$emit('start')">
        <span class="enter-btn-glow"></span>
        <span class="enter-btn-text">进 入 森 林</span>
        <span class="enter-btn-hint">PRESS START</span>
      </button>

      <!-- 底部提示 -->
      <p class="footer-hint">🎧 佩戴耳机获得最佳体验 &nbsp;|&nbsp; 📱 支持陀螺仪</p>

      <!-- 底部装饰线 -->
      <div class="deco-line bottom"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({ bestScore: { type: Number, default: 0 } })
defineEmits(['start'])

function particleStyle(i) {
  const x = 10 + (i * 37) % 80
  const delay = (i * 0.7) % 5
  const size = 2 + (i % 3)
  const dur = 6 + (i * 1.3) % 8
  return {
    left: `${x}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
    width: `${size}px`,
    height: `${size}px`
  }
}
</script>

<style scoped>
.home-screen {
  width: 100%; height: 100%;
  position: relative; display: flex;
  align-items: center; justify-content: center;
  background: radial-gradient(ellipse at center, #000d15 0%, #000308 60%, #000102 100%);
  overflow: hidden;
}

/* 背景氛围 */
.bg-ambient {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(0,40,20,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(0,30,10,0.1) 0%, transparent 50%);
  pointer-events: none;
}
.bg-fog {
  position: absolute; top: 0; left: 0; width: 200%; height: 100%;
  background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.004) 3px, rgba(0,255,65,0.004) 6px);
  animation: fogDrift 20s linear infinite; pointer-events: none;
}
@keyframes fogDrift { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* 浮动粒子 */
.float-particle {
  position: absolute; bottom: -10px;
  background: rgba(0,255,65,0.15); border-radius: 50%;
  animation: floatUp linear infinite; pointer-events: none;
}
@keyframes floatUp {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
}

/* 主内容 */
.home-content {
  position: relative; z-index: 1;
  text-align: center; padding: 24px 20px;
  max-width: 380px; width: 100%;
}

/* 装饰线 */
.deco-line {
  height: 1px; margin: 0 auto;
  background: linear-gradient(90deg, transparent, rgba(0,255,65,0.15), transparent);
}
.deco-line.top { width: 80%; margin-bottom: 24px; }
.deco-line.bottom { width: 60%; margin-top: 20px; }

/* 标题 */
.title-block { margin-bottom: 8px; }
.title-main {
  font-size: 2.8rem; letter-spacing: 0.25em;
  color: transparent;
  background: linear-gradient(180deg, #00ff41 0%, #005520 100%);
  -webkit-background-clip: text; background-clip: text;
  text-shadow: none;
  filter: drop-shadow(0 0 30px rgba(0,255,65,0.5)) drop-shadow(0 0 60px rgba(0,255,65,0.2));
  animation: titleBreathe 3s ease-in-out infinite;
}
@keyframes titleBreathe {
  0%, 100% { filter: drop-shadow(0 0 30px rgba(0,255,65,0.5)) drop-shadow(0 0 60px rgba(0,255,65,0.2)); }
  50% { filter: drop-shadow(0 0 45px rgba(0,255,65,0.7)) drop-shadow(0 0 90px rgba(0,255,65,0.3)); }
}
.title-sub {
  font-size: 0.8rem; letter-spacing: 0.35em;
  color: var(--hud-green-dim); margin-top: 8px;
}

/* 分隔线 */
.section-divider {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin: 18px 0;
}
.divider-line { width: 40px; height: 1px; background: rgba(0,255,65,0.15); }
.divider-dot { width: 3px; height: 3px; background: rgba(0,255,65,0.2); border-radius: 50%; }
.divider-diamond { color: rgba(0,255,65,0.2); font-size: 0.5rem; }

/* 操作指南 */
.guide-box {
  text-align: left; padding: 12px 16px;
  border: 1px solid rgba(0,255,65,0.08);
  border-radius: 8px; background: rgba(0,20,10,0.2);
}
.guide-row { display: flex; align-items: center; gap: 10px; padding: 5px 0; }
.guide-icon { font-size: 1rem; width: 24px; text-align: center; }
.guide-text { font-size: 0.85rem; color: rgba(180,200,180,0.7); letter-spacing: 0.05em; }

/* 最佳成绩 */
.record-badge {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 14px; padding: 6px 20px;
  border: 1px solid rgba(255,170,0,0.2); border-radius: 20px;
  background: rgba(20,10,0,0.3);
}
.record-star { color: var(--hud-amber); font-size: 0.9rem; }
.record-label { font-size: 0.75rem; color: var(--text-dim); letter-spacing: 0.1em; }
.record-value { font-size: 1.1rem; color: var(--hud-amber); font-weight: bold; text-shadow: 0 0 8px rgba(255,170,0,0.3); }

/* 进入按钮 */
.enter-btn {
  position: relative; display: block; width: 100%;
  margin: 20px auto 0; padding: 20px 24px;
  background: rgba(0,20,10,0.4);
  border: 2px solid rgba(0,255,65,0.4);
  border-radius: 6px; cursor: pointer;
  overflow: hidden; transition: all 0.3s ease;
  font-family: inherit;
}
.enter-btn-glow {
  position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle, rgba(0,255,65,0.08) 0%, transparent 60%);
  opacity: 0; transition: opacity 0.3s;
}
.enter-btn:hover .enter-btn-glow,
.enter-btn:active .enter-btn-glow { opacity: 1; }
.enter-btn:active { transform: scale(0.97); border-color: rgba(0,255,65,0.7); }
.enter-btn-text {
  display: block; font-size: 1.3rem; letter-spacing: 0.4em;
  color: var(--hud-green); text-shadow: 0 0 12px rgba(0,255,65,0.4);
  position: relative; z-index: 1;
}
.enter-btn-hint {
  display: block; font-size: 0.6rem; letter-spacing: 0.3em;
  color: var(--hud-green-dim); margin-top: 4px; position: relative; z-index: 1;
}

/* 底部 */
.footer-hint { margin-top: 12px; font-size: 0.7rem; color: rgba(100,140,100,0.35); letter-spacing: 0.05em; }
</style>
