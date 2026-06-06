<template>
  <div class="crosshair">
    <div class="crosshair-top"></div>
    <div class="crosshair-bottom"></div>
    <div class="crosshair-left"></div>
    <div class="crosshair-right"></div>
    <div class="crosshair-dot"></div>
  </div>
</template>

<style scoped>
.crosshair {
  position: fixed; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 48px; height: 48px;
  pointer-events: none; z-index: 15;
}
.crosshair-top, .crosshair-bottom, .crosshair-left, .crosshair-right {
  position: absolute; background: var(--hud-green); opacity: 0.85;
}
.crosshair-top { top: 0; left: 50%; width: 2px; height: 14px; transform: translateX(-50%); }
.crosshair-bottom { bottom: 0; left: 50%; width: 2px; height: 14px; transform: translateX(-50%); }
.crosshair-left { left: 0; top: 50%; width: 14px; height: 2px; transform: translateY(-50%); }
.crosshair-right { right: 0; top: 50%; width: 14px; height: 2px; transform: translateY(-50%); }
.crosshair-dot {
  position: absolute; top: 50%; left: 50%;
  width: 3px; height: 3px; background: var(--hud-green);
  border-radius: 50%; transform: translate(-50%, -50%);
}
</style>
