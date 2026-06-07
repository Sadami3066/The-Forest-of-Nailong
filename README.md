# 🌲 奶蛙之森

> 听声辨位 · 黑暗求生 — 一款基于 Web 的 3D 恐怖音频游戏

你在黑暗森林的中心醒来。四周是诡异的树木和微弱的月光。奶蛙藏在森林某处，发出笑声向你逼近。你无法看到它——只能依靠双耳判断方位。用手电筒照中它，在黎明到来前活下去。

---

## 🎮 玩法

| 操作 | 桌面端 | 手机端 |
|------|--------|--------|
| 视角旋转 | 点击画布后移动鼠标 | 陀螺仪（HTTPS）/ 滑动屏幕 |
| 发射手电 | 空格键 / 点击按钮 | 点击屏幕 / 点击按钮 |

- ⏱️ 在森林中坚持 **3 分钟**（游戏内 18:00 → 06:00 漫漫长夜）
- 👂 奶蛙发出 3D 空间笑声，距离越近声音越大
- 💓 心跳随奶蛙距离加速
- 🔦 对准奶蛙方向打开手电 → 照中得分
- 🌅 熬到日出即胜利 | 💀 被奶蛙碰到即失败

## ✨ 特性

- **3D 空间音频** — Web Audio API HRTF 定位，佩戴耳机精准辨位
- **陀螺仪瞄准** — 手机倾斜控制视角，iOS/Android 适配
- **HTTPS 开发服务器** — 自签名证书解锁移动端陀螺仪 API
- **连击 Combo** — 连续照中分数翻倍（最高 5x）
- **成就系统** — 5 个等级徽章，跨局持久化
- **本地排行榜** — TOP 10 成绩存储
- **分享卡片** — 结算时生成精美 PNG 成绩图
- **恐怖氛围** — 心跳声 / BGM / 跳杀贴脸 / 震屏特效
- **三种树木建模** — 针叶树 / 阔叶树 / 枯树
- **动态场景** — 月亮、星空、萤火虫、薄雾

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（HTTPS）
npm run dev

# 生产构建
npm run build
```

- 桌面端访问：`https://localhost:3000/`
- 手机端访问：`https://<你的局域网IP>:3000/`
- ⚠️ 手机端需接受自签名证书警告（设置 → 高级 → 继续访问）

## 📁 项目结构

```
src/
├── main.js                    # 入口
├── App.vue                    # 根组件 / 游戏循环 / 状态管理
├── components/
│   ├── StartScreen.vue        # 主页（恐怖风格游戏大厅）
│   ├── GameView.vue           # 游戏画布 + HUD 容器
│   ├── Crosshair.vue          # 十字准星
│   ├── FireButton.vue         # 手电筒按钮
│   ├── ScoreBoard.vue         # 得分 / 时间 / 连击
│   ├── GameOverModal.vue      # 结算（评分/成就/排行榜/分享）
│   ├── NaiwaGif.vue           # 奶蛙 GIF 弹出
│   ├── TutorialOverlay.vue    # 新手教程
│   └── SettingsPanel.vue      # 音量设置
├── game/
│   ├── GameEngine.js          # Three.js 3D 场景 / 森林 / 特效
│   ├── AudioManager.js        # Web Audio 空间音频 / BGM / 心跳
│   ├── GyroscopeInput.js      # 陀螺仪 / 鼠标 / 触摸输入
│   ├── NaiwaController.js     # 奶蛙 AI
│   └── GameState.js           # 状态机 / 连击 / 成就 / 排行榜
├── assets/
│   ├── audio/                 # 音频文件（BGM/心跳/笑声/枪声）
│   └── picture/               # 图片（主页背景/奶蛙GIF）
└── styles/
    └── main.css               # 全局暗黑 HUD 样式
```

## 🛠️ 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Vue 3 (Composition API) |
| 构建 | Vite 6 + @vitejs/plugin-basic-ssl |
| 3D 渲染 | Three.js |
| 空间音频 | Web Audio API (PannerNode HRTF) |
| 陀螺仪 | DeviceOrientationEvent |
| 字体 | Google Fonts (Creepster) |

## 📝 License

MIT
