/**
 * GyroscopeInput — 输入抽象层
 *
 * 桌面：鼠标移动控制视角（需先在画布区域点击激活）
 * 手机：陀螺仪优先（需HTTPS或localhost），触摸滑动作为回退
 */
import * as THREE from 'three'

export class GyroscopeInput {
  constructor() {
    this.yaw = 0
    this.pitch = 0
    this._targetYaw = 0
    this._targetPitch = 0
    this._calibrationYaw = 0
    this._calibrationPitch = 0

    this.mouseSensitivity = 0.0025
    this.touchSensitivity = 0.008
    this.gyroSensitivity = 1.0
    this.smoothFactor = 0.15

    this.maxPitch = Math.PI / 2.2
    this.minPitch = -Math.PI / 2.2

    this.isEnabled = false
    this.isCalibrated = false
    this._mouseActive = false     // 鼠标已激活（用户点击后）
    this._isGyroActive = false    // 陀螺仪正在提供数据
    this._permissionGranted = false
    this._lastGyroTime = 0

    // 追踪
    this._lastMouseX = null
    this._lastMouseY = null
    this._lastTouchId = null
    this._lastTouchX = null
    this._lastTouchY = null
    // 陀螺仪增量追踪
    this._lastAlpha = null     // 上一帧 alpha 值
    this._accumYaw = 0         // 累积 yaw 增量(度)
    this._calibrationBeta = 45 // beta 中性点(度)，默认 45°（典型握持姿势）

    // 绑定
    this._onMouseDown = this._onMouseDown.bind(this)
    this._onMouseMove = this._onMouseMove.bind(this)
    this._onDeviceOrientation = this._onDeviceOrientation.bind(this)
    this._onTouchStart = this._onTouchStart.bind(this)
    this._onTouchMove = this._onTouchMove.bind(this)
    this._onTouchEnd = this._onTouchEnd.bind(this)
  }

  /**
   * 请求陀螺仪权限（iOS 需用户手势同步调用）
   */
  async requestPermission() {
    // 检测是否安全上下文（HTTPS 或 localhost）
    const isSecure = window.isSecureContext
    if (!isSecure) {
      console.log('[Gyro] ⚠️ 非安全上下文，陀螺仪不可用。需 HTTPS 或 localhost')
      this._permissionGranted = false
      return 'insecure'
    }

    if (!window.DeviceOrientationEvent) {
      console.log('[Gyro] 设备不支持 DeviceOrientationEvent')
      this._permissionGranted = false
      return 'unavailable'
    }

    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission()
        this._permissionGranted = (permission === 'granted')
        console.log('[Gyro] iOS 权限:', permission)
        return permission
      } catch (e) {
        this._permissionGranted = false
        return 'denied'
      }
    }

    // Android / 桌面：安全上下文中自动可用
    this._permissionGranted = true
    console.log('[Gyro] 安全上下文，陀螺仪可用')
    return 'granted'
  }

  /**
   * 初始化输入监听
   */
  init() {
    this._removeAllListeners()
    this._addAllListeners()
  }

  _removeAllListeners() {
    window.removeEventListener('deviceorientation', this._onDeviceOrientation)
    document.removeEventListener('mousedown', this._onMouseDown)
    document.removeEventListener('mousemove', this._onMouseMove)
    document.removeEventListener('touchstart', this._onTouchStart)
    document.removeEventListener('touchmove', this._onTouchMove)
    document.removeEventListener('touchend', this._onTouchEnd)
    this._mouseActive = false
    this._isGyroActive = false
    this.isEnabled = false
    this._lastMouseX = null
    this._lastMouseY = null
    this._lastTouchId = null
    this._lastAlpha = null
    this._accumYaw = 0
  }

  _addAllListeners() {
    // 鼠标：mousedown 激活 + mousemove 追踪
    document.addEventListener('mousedown', this._onMouseDown)
    document.addEventListener('mousemove', this._onMouseMove)

    // 触摸：回退方案，始终可用
    document.addEventListener('touchstart', this._onTouchStart, { passive: false })
    document.addEventListener('touchmove', this._onTouchMove, { passive: false })
    document.addEventListener('touchend', this._onTouchEnd)

    // 陀螺仪：安全上下文中可用
    if (this._permissionGranted) {
      window.addEventListener('deviceorientation', this._onDeviceOrientation)
      console.log('[Gyro] deviceorientation 监听已添加')
    }
  }

  // ==================== 陀螺仪 ====================

  _onDeviceOrientation(event) {
    if (!this.isEnabled) return
    if (event.alpha === null || event.alpha === undefined) return

    this._lastGyroTime = performance.now()

    const alpha = event.alpha  // 0-360°, 绕Z轴(穿透屏幕)旋转 = 罗盘方向
    const beta = event.beta    // -180~180°, 绕X轴(横轴)旋转 = 前后倾斜
    const gamma = event.gamma  // -90~90°, 绕Y轴(纵轴)旋转 = 左右倾斜

    // === 首次收到有效数据 ===
    if (!this._isGyroActive) {
      this._isGyroActive = true
      this._lastAlpha = null   // 重置，下一帧才开始计算delta
      this._accumYaw = 0
      // 记录当前 beta 作为 pitch 中性点
      // beta: 0=平躺, 90=竖直 — 正常握持约 45-90°
      this._calibrationBeta = beta
      console.log('[Gyro] ✅ 陀螺仪激活, 初始 beta=%.1f°', beta)
      return
    }

    // === Yaw：用 alpha 的相对增量，避免 0°/360° 跳变 ===
    if (this._lastAlpha !== null) {
      let delta = alpha - this._lastAlpha
      // 处理 0°↔360° 环绕
      if (delta > 180) delta -= 360
      if (delta < -180) delta += 360
      this._accumYaw += delta
    }
    this._lastAlpha = alpha

    // === Pitch：用 beta 绝对值，减去校准中性点 ===
    // beta 越大 = 屏幕越竖直(朝前) → 对应 pitch=0（平视）
    // beta 变小 = 屏幕向后仰 → 对应抬头（pitch<0）
    // beta 变大 = 屏幕向前倾 → 对应低头（pitch>0）
    const rawPitch = beta - this._calibrationBeta

    // 横屏时用 gamma 辅助 pitch（gamma 在横屏时代表前后倾斜）
    const landscape = window.innerWidth > window.innerHeight
    let pitch = rawPitch
    if (landscape) {
      // 横屏时 gamma 更准确反映前后倾斜
      pitch = -gamma
    }

    // 映射到相机角度（取反让"抬头"对应 pitch 负值）
    this._targetYaw = THREE.MathUtils.degToRad(this._accumYaw) * this.gyroSensitivity
    this._targetPitch = THREE.MathUtils.degToRad(pitch) * this.gyroSensitivity * 0.7
  }

  _isGyroTimedOut() {
    return !this._isGyroActive ||
      (performance.now() - this._lastGyroTime) > 2000
  }

  // ==================== 鼠标 ====================

  _onMouseDown(event) {
    if (!this.isEnabled) return
    // 在游戏画布区域点击才激活鼠标（避免点击UI按钮时激活）
    const target = event.target
    if (target && (target.id === 'game-canvas' || target.closest('#game-canvas'))) {
      this._mouseActive = true
      this._lastMouseX = event.clientX
      this._lastMouseY = event.clientY
      console.log('[Input] 🖱️ 鼠标已激活（点击画布）')
    }
  }

  _onMouseMove(event) {
    if (!this.isEnabled) return
    if (!this._mouseActive) return  // 未激活：忽略鼠标移动

    if (this._lastMouseX !== null) {
      const dx = event.clientX - this._lastMouseX
      const dy = event.clientY - this._lastMouseY
      if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
        this._targetYaw -= dx * this.mouseSensitivity
        this._targetPitch -= dy * this.mouseSensitivity
      }
    }
    this._lastMouseX = event.clientX
    this._lastMouseY = event.clientY
  }

  // ==================== 触摸 ====================

  _onTouchStart(event) {
    if (!this.isEnabled) return
    // 陀螺仪工作时优先陀螺仪
    if (!this._isGyroTimedOut()) return
    if (event.touches.length === 1) {
      const t = event.touches[0]
      this._lastTouchId = t.identifier
      this._lastTouchX = t.clientX
      this._lastTouchY = t.clientY
    }
    event.preventDefault()
  }

  _onTouchMove(event) {
    if (!this.isEnabled) return
    if (!this._isGyroTimedOut()) return
    if (event.touches.length !== 1) return

    const t = event.touches[0]
    if (this._lastTouchId === t.identifier) {
      const dx = t.clientX - this._lastTouchX
      const dy = t.clientY - this._lastTouchY
      if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
        this._targetYaw += dx * this.touchSensitivity
        this._targetPitch += dy * this.touchSensitivity
      }
    }
    this._lastTouchX = t.clientX
    this._lastTouchY = t.clientY
    event.preventDefault()
  }

  _onTouchEnd(event) {
    this._lastTouchId = null
  }

  // ==================== 公共方法 ====================

  calibrate() {
    if (this._isGyroActive) {
      // 重置陀螺仪累积值
      this._accumYaw = 0
      this._lastAlpha = null
      this._targetYaw = 0
      this._targetPitch = 0
      console.log('[Gyro] 校准完成 — 视角归零')
    } else {
      // 桌面：归零 + 重置鼠标激活状态
      this._targetYaw = 0
      this._targetPitch = 0
      this._lastMouseX = null
      this._lastMouseY = null
      this._mouseActive = false
      console.log('[Input] 桌面校准：视角归零（需点击画布激活鼠标）')
    }
    this.isCalibrated = true
  }

  enable() {
    this.isEnabled = true
  }

  disable() {
    this.isEnabled = false
  }

  update() {
    this._targetPitch = Math.max(this.minPitch, Math.min(this.maxPitch, this._targetPitch))
    this.yaw += (this._targetYaw - this.yaw) * this.smoothFactor
    this.pitch += (this._targetPitch - this.pitch) * this.smoothFactor
  }

  getEuler() {
    return new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ')
  }

  dispose() {
    this.disable()
    this._removeAllListeners()
  }
}
