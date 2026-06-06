/**
 * AudioManager — 空间音频管理
 * 奶龙笑声(3D) + 心跳(2D,距离越近越快越响) + BGM(占位)
 */
import * as THREE from 'three'
import nailongLaughUrl from '../assets/audio/奶龙大笑.mp3'
import gunshotUrl from '../assets/audio/开枪音效.mp3'

export class AudioManager {
  constructor() {
    this.ctx = null
    this.listener = null

    // 奶龙 3D 笑声
    this._nailongPanner = null
    this._nailongGain = null
    this._nailongSource = null
    this._nailongBuffer = null
    this._isNailongPlaying = false

    // 手电筒音效
    this._flashBuffer = null

    // 心跳 (2D，不空间化)
    this._heartbeatGain = null
    this._heartbeatSource = null
    this._heartbeatBuffer = null
    this._heartbeatPlaying = false
    this._heartbeatRate = 1.0  // 播放速率 (1.0=正常, 2.0=两倍快)

    // BGM
    this._bgmGain = null
    this._bgmSource = null
    this._bgmBuffer = null
    this._bgmPlaying = false

    this.masterGain = 0.7
    this.nailongVolume = 0.55
    this._isLoaded = false
  }

  async init() {
    if (this.ctx && this.ctx.state !== 'closed') await this.ctx.close()
    this.ctx = new (window.AudioContext || window.webkitAudioContext)()
    if (this.ctx.state === 'suspended') await this.ctx.resume()

    this.listener = this.ctx.listener
    this.listener.positionX.value = 0
    this.listener.positionY.value = 0
    this.listener.positionZ.value = 0
    this.listener.forwardX.value = 0
    this.listener.forwardY.value = 0
    this.listener.forwardZ.value = -1
    this.listener.upX.value = 0
    this.listener.upY.value = 1
    this.listener.upZ.value = 0

    await this._loadAudioFiles()
    console.log('AudioManager initialized')
  }

  async _loadAudioFiles() {
    try {
      const [nailongBuf, flashBuf] = await Promise.all([
        this._loadBuffer(nailongLaughUrl),
        this._loadBuffer(gunshotUrl)
      ])
      this._nailongBuffer = nailongBuf
      this._flashBuffer = flashBuf
      this._isLoaded = true
      console.log('Audio files loaded')
    } catch (e) {
      console.warn('Audio load failed, using synthetic fallback:', e.message)
    }
  }

  async _loadBuffer(url) {
    const r = await fetch(url)
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    return await this.ctx.decodeAudioData(await r.arrayBuffer())
  }

  // ==================== 奶龙 3D 笑声 ====================

  startNailongSound() {
    if (!this.ctx || this._isNailongPlaying) return
    this._nailongPanner = this.ctx.createPanner()
    this._nailongPanner.panningModel = 'HRTF'
    this._nailongPanner.distanceModel = 'inverse'
    this._nailongPanner.refDistance = 4
    this._nailongPanner.maxDistance = 18
    this._nailongPanner.rolloffFactor = 1.5

    this._nailongGain = this.ctx.createGain()
    this._nailongGain.gain.value = 0

    if (this._isLoaded && this._nailongBuffer) {
      const src = this.ctx.createBufferSource()
      src.buffer = this._nailongBuffer
      src.loop = true
      src.connect(this._nailongPanner)
      src.start(0)
      this._nailongSource = src
    } else {
      this._playNailongSynthetic()
    }

    this._nailongPanner.connect(this._nailongGain)
    this._nailongGain.connect(this.ctx.destination)
    this._nailongGain.gain.setTargetAtTime(
      this.nailongVolume * this.masterGain, this.ctx.currentTime, 0.3
    )
    this._isNailongPlaying = true
  }

  _playNailongSynthetic() {
    const osc = this.ctx.createOscillator(); osc.type = 'sawtooth'; osc.frequency.value = 180
    const lfo = this.ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 2.5
    const lfoG = this.ctx.createGain(); lfoG.gain.value = 0.5
    const mainG = this.ctx.createGain(); mainG.gain.value = 0
    lfo.connect(lfoG); lfoG.connect(mainG.gain); osc.connect(mainG)
    mainG.connect(this._nailongPanner)
    osc.start(); lfo.start()
    this._nailongSource = osc
    this._synthNodes = [osc, lfo, lfoG, mainG]
  }

  stopNailongSound() {
    if (!this._isNailongPlaying) return
    try { this._nailongSource?.stop?.() } catch {}
    if (this._synthNodes) {
      for (const n of this._synthNodes) { try { n.stop() } catch {}; n?.disconnect() }
      this._synthNodes = null
    }
    this._nailongSource?.disconnect()
    this._nailongGain?.disconnect()
    this._nailongPanner?.disconnect()
    this._nailongSource = null
    this._nailongGain = null
    this._nailongPanner = null
    this._isNailongPlaying = false
  }

  updateNailongPosition(x, y, z) {
    if (this._nailongPanner) {
      this._nailongPanner.positionX.value = x
      this._nailongPanner.positionY.value = y
      this._nailongPanner.positionZ.value = z
    }
  }

  // 根据距离调整奶龙音量（HRTF 已处理距离衰减，这里微调）
  setNailongVolumeByDistance(distance) {
    if (!this._nailongGain) return
    const vol = Math.min(1, 1 / Math.max(1, distance / 4))
    this._nailongGain.gain.setTargetAtTime(
      vol * this.nailongVolume * this.masterGain, this.ctx.currentTime, 0.2
    )
  }

  // ==================== 心跳 (2D) ====================

  startHeartbeat() {
    if (!this.ctx || this._heartbeatPlaying) return
    // 用低频振荡模拟心跳
    this._heartbeatGain = this.ctx.createGain()
    this._heartbeatGain.gain.value = 0
    this._heartbeatGain.connect(this.ctx.destination)
    this._heartbeatPlaying = true
    // 开始心跳循环
    this._beatHeart()
  }

  _beatHeart() {
    if (!this._heartbeatPlaying || !this.ctx) return
    const now = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(50, now)
    osc.frequency.linearRampToValueAtTime(30, now + 0.15)
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(0, now)
    g.gain.linearRampToValueAtTime(0.5, now + 0.05)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.2)
    osc.connect(g)
    g.connect(this._heartbeatGain)
    osc.start(now)
    osc.stop(now + 0.25)
    // 根据距离决定下一次心跳的间隔
    const interval = 0.6 / Math.max(0.5, this._heartbeatRate)
    this._heartbeatTimer = setTimeout(() => this._beatHeart(), interval * 1000)
  }

  stopHeartbeat() {
    this._heartbeatPlaying = false
    if (this._heartbeatTimer) clearTimeout(this._heartbeatTimer)
    this._heartbeatGain?.disconnect()
    this._heartbeatGain = null
  }

  /**
   * 更新心跳速率（奶龙越近越快）
   * @param {number} distance - 奶龙到玩家的距离
   */
  updateHeartbeatRate(distance) {
    // 距离 2→最快(3x), 距离 15→最慢(0.5x)
    this._heartbeatRate = THREE.MathUtils.clamp(3 / Math.max(1, distance / 3), 0.6, 3.5)
    if (this._heartbeatGain) {
      const vol = 0.25 + 0.45 / Math.max(1, distance / 4)
      this._heartbeatGain.gain.setTargetAtTime(vol * this.masterGain, this.ctx.currentTime, 0.3)
    }
  }

  // ==================== BGM (占位) ====================

  startBGM() {
    // TODO: 加载诡异BGM文件后启用
    // if (!this.ctx || this._bgmPlaying) return
    // this._bgmGain = this.ctx.createGain()
    // ...
  }

  stopBGM() {
    this._bgmPlaying = false
    this._bgmSource?.stop?.()
    this._bgmGain?.disconnect()
    this._bgmGain = null
  }

  // ==================== 手电筒音效 ====================

  playFlashSound() {
    if (!this.ctx) return
    if (this._flashBuffer) {
      const src = this.ctx.createBufferSource()
      src.buffer = this._flashBuffer
      const g = this.ctx.createGain()
      g.gain.value = 0.6 * this.masterGain
      src.connect(g); g.connect(this.ctx.destination); src.start(0)
    } else {
      this._playSyntheticFlash()
    }
  }

  _playSyntheticFlash() {
    const now = this.ctx.currentTime
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.08, this.ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / d.length * 30) * 0.5
    const src = this.ctx.createBufferSource(); src.buffer = buf
    const g = this.ctx.createGain(); g.gain.value = 0.6 * this.masterGain
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 2000
    src.connect(f); f.connect(g); g.connect(this.ctx.destination)
    src.start(now); src.stop(now + 0.1)
  }

  playHitSound() {
    if (!this.ctx) return
    const now = this.ctx.currentTime
    const t = (freq, start, dur, vol) => {
      const osc = this.ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = freq
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, start)
      g.gain.linearRampToValueAtTime(vol, start + 0.02)
      g.gain.exponentialRampToValueAtTime(0.001, start + dur)
      osc.connect(g); g.connect(this.ctx.destination); osc.start(start); osc.stop(start + dur)
    }
    t(800, now, 0.15, 0.5 * this.masterGain)
    t(1200, now + 0.08, 0.12, 0.35 * this.masterGain)
  }

  playMissSound() {
    if (!this.ctx) return
    const now = this.ctx.currentTime
    const osc = this.ctx.createOscillator(); osc.type = 'triangle'
    osc.frequency.setValueAtTime(200, now); osc.frequency.linearRampToValueAtTime(80, now + 0.2)
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0, now)
    g.gain.linearRampToValueAtTime(0.2 * this.masterGain, now + 0.05)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.25)
    osc.connect(g); g.connect(this.ctx.destination); osc.start(now); osc.stop(now + 0.3)
  }

  playWinSound() {
    if (!this.ctx) return
    const now = this.ctx.currentTime;
    [523, 659, 784, 1047].forEach((f, i) => {
      const osc = this.ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = f
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, now + i * 0.15)
      g.gain.linearRampToValueAtTime(0.3 * this.masterGain, now + i * 0.15 + 0.05)
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.4)
      osc.connect(g); g.connect(this.ctx.destination)
      osc.start(now + i * 0.15); osc.stop(now + i * 0.15 + 0.5)
    })
  }

  playLoseSound() {
    if (!this.ctx) return
    const now = this.ctx.currentTime;
    [400, 300, 200].forEach((f, i) => {
      const osc = this.ctx.createOscillator(); osc.type = 'sawtooth'; osc.frequency.value = f
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0, now + i * 0.25)
      g.gain.linearRampToValueAtTime(0.25 * this.masterGain, now + i * 0.25 + 0.05)
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.25 + 0.5)
      osc.connect(g); g.connect(this.ctx.destination)
      osc.start(now + i * 0.25); osc.stop(now + i * 0.25 + 0.6)
    })
  }

  // ==================== Listener ====================

  // ==================== 音量控制 ====================

  setMasterVolume(v) {
    this.masterGain = THREE.MathUtils.clamp(v, 0, 1)
    // 立即使新的 masterGain 生效
    if (this._nailongGain) {
      this._nailongGain.gain.setTargetAtTime(
        this.nailongVolume * this.masterGain, this.ctx.currentTime, 0.1)
    }
    if (this._heartbeatGain) {
      const vol = 0.25 + 0.45 / Math.max(1, (this._lastNailongDist || 10) / 4)
      this._heartbeatGain.gain.setTargetAtTime(vol * this.masterGain, this.ctx.currentTime, 0.1)
    }
  }

  setNailongVolume(v) { this.nailongVolume = THREE.MathUtils.clamp(v, 0, 1) }
  setHeartbeatVolume(v) { this._heartbeatBaseVolume = THREE.MathUtils.clamp(v, 0, 1) }
  setBGMVolume(v) { this._bgmVolume = THREE.MathUtils.clamp(v, 0, 1) }
  setSFXVolume(v) { this.sfxVolume = THREE.MathUtils.clamp(v, 0, 1) }

  getVolumes() {
    return {
      master: this.masterGain,
      nailong: this.nailongVolume,
      heartbeat: this._heartbeatBaseVolume || 0.7,
      bgm: this._bgmVolume || 0.5,
      sfx: this.sfxVolume
    }
  }

  updateListenerOrientation(forward, up) {
    if (!this.listener) return
    this.listener.forwardX.value = forward.x
    this.listener.forwardY.value = forward.y
    this.listener.forwardZ.value = forward.z
    this.listener.upX.value = up.x
    this.listener.upY.value = up.y
    this.listener.upZ.value = up.z
  }

  dispose() {
    this.stopNailongSound()
    this.stopHeartbeat()
    this.stopBGM()
    if (this.ctx && this.ctx.state !== 'closed') this.ctx.close()
    this.ctx = null
  }
}
