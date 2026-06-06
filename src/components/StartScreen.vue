<template>
  <div class="home-screen">
    <!-- 全屏背景 -->
    <div class="bg-full" :style="{ backgroundImage: `url(${bgImage})` }"></div>

    <!-- 暗色遮罩 -->
    <div class="bg-overlay"></div>

    <!-- 扫描线效果 -->
    <div class="scanlines"></div>

    <!-- 噪点 -->
    <div class="noise"></div>

    <!-- 内容层 -->
    <div class="home-content">
      <!-- 主标题 -->
      <div class="title-block">
        <h1 class="title-main">奶 蛙 之 森</h1>
        <p class="title-sub">— 听 声 辨 位 · 黑 暗 求 生 —</p>
      </div>

      <!-- 间隔 -->
      <div class="spacer"></div>

      <!-- 菜单 -->
      <div class="menu-buttons">
        <button class="menu-btn" @click="$emit('start')">
          <span class="btn-text">进 入 森 林</span>
        </button>
        <button class="menu-btn secondary" @click="$emit('tutorial')">
          <span class="btn-text">新 手 教 程</span>
        </button>
        <button class="menu-btn secondary" @click="$emit('settings')">
          <span class="btn-text">设 置</span>
        </button>
      </div>

      <!-- 最佳成绩 -->
      <div v-if="bestScore > 0" class="record-line">
        <span>★ 最佳记录 {{ bestScore }} ★</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from '../assets/picture/home.png'

defineProps({ bestScore: { type: Number, default: 0 } })
defineEmits(['start', 'tutorial', 'settings'])
</script>

<style scoped>
/* ========== 谷歌恐怖字体 ========== */
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

.home-screen {
  width: 100%; height: 100%; position: relative;
  overflow: hidden; background: #000;
}

/* 全屏背景图 */
.bg-full {
  position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px;
  background-size: cover; background-position: center;
  filter: brightness(0.85) contrast(1.05);
  animation: bgPulse 8s ease-in-out infinite;
}
@keyframes bgPulse {
  0%, 100% { filter: brightness(0.85) contrast(1.05); }
  50% { filter: brightness(0.9) contrast(1.1); }
}

/* 暗色遮罩 — 仅四角轻微压暗 */
.bg-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%);
  pointer-events: none;
}

/* CRT扫描线 */
.scanlines {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0,0,0,0.03) 3px,
    rgba(0,0,0,0.03) 6px
  );
  pointer-events: none; z-index: 2;
}

/* 噪点 */
.noise {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none; z-index: 3;
}

/* 内容层 */
.home-content {
  position: relative; z-index: 10;
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-end;
  height: 100%; padding: 40px 24px 60px;
}

/* 标题区块 */
.title-block { text-align: center; margin-bottom: 8px; }
.title-main {
  font-family: 'Creepster', 'Times New Roman', serif;
  font-size: 3.4rem; letter-spacing: 0.25em; line-height: 1.1;
  color: #00ff41;
  text-shadow:
    0 0 10px rgba(0,255,65,0.8),
    0 0 30px rgba(0,255,65,0.5),
    0 0 60px rgba(0,255,65,0.3),
    0 0 100px rgba(0,255,65,0.15),
    2px 2px 0 #001a00,
    4px 4px 0 #000800;
  animation: titleGlitch 5s ease-in-out infinite;
  -webkit-text-stroke: 1px rgba(0,255,65,0.3);
}
@keyframes titleGlitch {
  0%, 90%, 100% { transform: translate(0); text-shadow: 0 0 10px rgba(0,255,65,0.8), 0 0 30px rgba(0,255,65,0.5), 0 0 60px rgba(0,255,65,0.3), 2px 2px 0 #001a00, 4px 4px 0 #000800; }
  92% { transform: translate(-3px, 2px); text-shadow: -3px 0 rgba(0,255,0,0.6), 3px 0 rgba(255,0,0,0.3), 0 0 40px rgba(0,255,65,0.7); }
  94% { transform: translate(3px, -1px); text-shadow: 3px 0 rgba(255,0,0,0.3), -3px 0 rgba(0,255,0,0.6), 0 0 40px rgba(0,255,65,0.7); }
}
.title-sub {
  font-family: 'Creepster', 'Times New Roman', serif;
  font-size: 0.95rem; letter-spacing: 0.35em;
  color: rgba(0,255,65,0.55);
  text-shadow: 0 0 8px rgba(0,255,65,0.3);
  margin-top: 8px;
}

.spacer { flex: 1; min-height: 20px; }

/* 菜单按钮 */
.menu-buttons {
  width: 100%; max-width: 300px;
  display: flex; flex-direction: column; gap: 14px;
}
.menu-btn {
  width: 100%; padding: 16px 20px;
  background: rgba(0,0,0,0.6);
  border: none;
  cursor: pointer; font-family: inherit;
  transition: all 0.25s ease;
  position: relative;
}
.menu-btn::before {
  content: '';
  position: absolute; left: 0; top: 0; width: 3px; height: 100%;
  background: rgba(0,255,65,0.4);
  transition: all 0.25s ease;
}
.menu-btn:hover::before,
.menu-btn:active::before {
  width: 100%; background: rgba(0,255,65,0.08);
}
.menu-btn .btn-text {
  position: relative; z-index: 1;
  font-family: 'Creepster', 'Times New Roman', serif;
  font-size: 1.3rem; letter-spacing: 0.3em;
  color: #00ff41;
  text-shadow: 0 0 8px rgba(0,255,65,0.4);
  transition: text-shadow 0.25s ease;
}
.menu-btn:active .btn-text {
  text-shadow: 0 0 20px rgba(0,255,65,0.8), 0 0 40px rgba(0,255,65,0.4);
}
.menu-btn.secondary .btn-text {
  font-size: 1.1rem; opacity: 0.7;
}
.menu-btn.secondary::before {
  background: rgba(0,255,65,0.2);
}

/* 最佳成绩 */
.record-line {
  margin-top: 16px;
  font-family: 'Creepster', 'Times New Roman', serif;
  font-size: 0.85rem; letter-spacing: 0.2em;
  color: rgba(255,170,0,0.6);
  text-shadow: 0 0 6px rgba(255,170,0,0.3);
}
</style>
