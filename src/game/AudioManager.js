/**
 * AudioManager — 空间音频管理
 * 奶蛙笑声(3D) + 心跳(2D,距离越近越快越响) + BGM(占位)
 */
import * as THREE from 'three'
import naiwaLaughUrl from '../assets/audio/奶龙大笑.mp3'
import gunshotUrl from '../assets/audio/开枪音效.mp3'
import bgmUrl from '../assets/audio/bgm.mp3'
import nervous1Url from '../assets/audio/nervous1.mp3'
import nervous2Url from '../assets/audio/nervous2.mp3'
import nervous3Url from '../assets/audio/nervous3.mp3'

export class AudioManager {
  constructor() {
    this.ctx = null
    this.listener = null

    // 奶蛙 3D 笑声
    this._naiwaPanner = null
    this._naiwaGain = null
    this._naiwaSource = null
    this._naiwaBuffer = null
    this._isNaiwaPlaying = false

    // 手电筒音效
    this._flashBuffer = null

    // 心跳 — 3档音频文件，根据距离即时切换
    this._heartbeatGain = null
    this._heartbeatSource = null
    this._heartbeatBuffers = {}   // { 1: buffer, 2: buffer, 3: buffer }
    this._heartbeatPlaying = false
    this._currentHeartLevel = 0   // 当前播放的档位 0=无 1=慢 2=快 3=超快

    // BGM
    this._bgmGain = null
    this._bgmSource = null
    this._bgmBuffer = null
    this._bgmPlaying = false

    this.masterGain = 0.7
    this.naiwaVolume = 0.55
    this._heartbeatVol = 0.7
    this._bgmVolume = 0.5
    this._isLoaded = false
  }

  async init() {
    // 如果已有活跃的 context（BGM 可能在播放），不要关闭它
    if (!this.ctx || this.ctx.state === 'closed') {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)()
    }
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

    if (!this._isLoaded) {
      await this._loadAudioFiles()
    }
    console.log('AudioManager initialized')
  }

  async _loadAudioFiles() {
    try {
      const [naiwaBuf, flashBuf, bgmBuf, hb1, hb2, hb3] = await Promise.all([
        this._loadBuffer(naiwaLaughUrl),
        this._loadBuffer(gunshotUrl),
        this._loadBuffer(bgmUrl).catch(() => null),
        this._loadBuffer(nervous1Url).catch(() => null),
        this._loadBuffer(nervous2Url).catch(() => null),
        this._loadBuffer(nervous3Url).catch(() => null)
      ])
      this._naiwaBuffer = naiwaBuf
      this._flashBuffer = flashBuf
      this._bgmBuffer = bgmBuf
      this._heartbeatBuffers = { 1: hb1, 2: hb2, 3: hb3 }
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

  // ==================== 奶蛙 3D 笑声 ====================

  startNaiwaSound() {
    if (!this.ctx || this._isNaiwaPlaying) return
    this._naiwaPanner = this.ctx.createPanner()
    this._naiwaPanner.panningModel = 'HRTF'
    this._naiwaPanner.distanceModel = 'inverse'
    this._naiwaPanner.refDistance = 4
    this._naiwaPanner.maxDistance = 18
    this._naiwaPanner.rolloffFactor = 1.5

    this._naiwaGain = this.ctx.createGain()
    this._naiwaGain.gain.value = 0

    if (this._isLoaded && this._naiwaBuffer) {
      const src = this.ctx.createBufferSource()
      src.buffer = this._naiwaBuffer
      src.loop = true
      src.connect(this._naiwaPanner)
      src.start(0)
      this._naiwaSource = src
    } else {
      this._playNaiwaSynthetic()
    }

    this._naiwaPanner.connect(this._naiwaGain)
    this._naiwaGain.connect(this.ctx.destination)
    this._naiwaGain.gain.setTargetAtTime(
      this.naiwaVolume * this.masterGain, this.ctx.currentTime, 0.3
    )
    this._isNaiwaPlaying = true
  }

  _playNaiwaSynthetic() {
    const osc = this.ctx.createOscillator(); osc.type = 'sawtooth'; osc.frequency.value = 180
    const lfo = this.ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 2.5
    const lfoG = this.ctx.createGain(); lfoG.gain.value = 0.5
    const mainG = this.ctx.createGain(); mainG.gain.value = 0
    lfo.connect(lfoG); lfoG.connect(mainG.gain); osc.connect(mainG)
    mainG.connect(this._naiwaPanner)
    osc.start(); lfo.start()
    this._naiwaSource = osc
    this._synthNodes = [osc, lfo, lfoG, mainG]
  }

  stopNaiwaSound() {
    if (!this._isNaiwaPlaying) return
    try { this._naiwaSource?.stop?.() } catch {}
    if (this._synthNodes) {
      for (const n of this._synthNodes) { try { n.stop() } catch {}; n?.disconnect() }
      this._synthNodes = null
    }
    this._naiwaSource?.disconnect()
    this._naiwaGain?.disconnect()
    this._naiwaPanner?.disconnect()
    this._naiwaSource = null
    this._naiwaGain = null
    this._naiwaPanner = null
    this._isNaiwaPlaying = false
  }

  updateNaiwaPosition(x, y, z) {
    if (this._naiwaPanner) {
      this._naiwaPanner.positionX.value = x
      this._naiwaPanner.positionY.value = y
      this._naiwaPanner.positionZ.value = z
    }
  }

  // 根据距离调整奶蛙音量（HRTF 已处理距离衰减，这里微调）
  setNaiwaVolumeByDistance(distance) {
    if (!this._naiwaGain) return
    const vol = Math.min(1, 1 / Math.max(1, distance / 4))
    this._naiwaGain.gain.setTargetAtTime(
      vol * this.naiwaVolume * this.masterGain, this.ctx.currentTime, 0.2
    )
  }

  // ==================== 心跳 (2D, 3档即时切换) ====================

  startHeartbeat() {
    if (!this.ctx || this._heartbeatPlaying) return
    this._heartbeatGain = this.ctx.createGain()
    this._heartbeatGain.gain.value = 0.4 * this.masterGain
    this._heartbeatGain.connect(this.ctx.destination)
    this._heartbeatPlaying = true
    this._currentHeartLevel = 0
  }

  /**
   * 根据距离播放对应心跳文件，支持即时切换
   * @param {number} distance - 奶蛙到玩家的距离
   */
  updateHeartbeatRate(distance) {
    if (!this._heartbeatPlaying || !this.ctx) return

    // 确定档位
    let level = 3  // 距离 > 8: nervous3 (慢)
    if (distance <= 4) level = 1       // < 4: nervous1 (最快)
    else if (distance <= 8) level = 2  // 4-8: nervous2 (加快)

    // 如果档位没变，不切换（让当前音频继续循环播放）
    if (level === this._currentHeartLevel) return

    // 档位变了 → 立即停止当前，播放新的
    this._switchHeartbeat(level)
  }

  _switchHeartbeat(level) {
    // 停止当前播放
    if (this._heartbeatSource) {
      try { this._heartbeatSource.stop() } catch {}
      this._heartbeatSource.disconnect()
      this._heartbeatSource = null
    }

    const buf = this._heartbeatBuffers[level]
    if (!buf) return

    // 立即开始播放新文件
    const src = this.ctx.createBufferSource()
    src.buffer = buf
    src.loop = true
    src.connect(this._heartbeatGain)
    src.start(0)
    this._heartbeatSource = src
    this._currentHeartLevel = level
  }

  stopHeartbeat() {
    this._heartbeatPlaying = false
    if (this._heartbeatSource) {
      try { this._heartbeatSource.stop() } catch {}
      this._heartbeatSource.disconnect()
      this._heartbeatSource = null
    }
    this._heartbeatGain?.disconnect()
    this._heartbeatGain = null
    this._currentHeartLevel = 0
  }

  // ==================== BGM (占位) ====================

  startBGM() {
    if (!this.ctx || this._bgmPlaying) return
    if (!this._bgmBuffer) return
    this._bgmGain = this.ctx.createGain()
    this._bgmGain.gain.value = (this._bgmVolume || 0.5) * this.masterGain
    this._bgmGain.connect(this.ctx.destination)
    const src = this.ctx.createBufferSource()
    src.buffer = this._bgmBuffer
    src.loop = true
    src.connect(this._bgmGain)
    src.start(0)
    this._bgmSource = src
    this._bgmPlaying = true
  }

  stopBGM() {
    this._bgmPlaying = false
    try { this._bgmSource?.stop?.() } catch {}
    this._bgmSource?.disconnect()
    this._bgmGain?.disconnect()
    this._bgmSource = null
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
    if (this._naiwaGain) {
      this._naiwaGain.gain.setTargetAtTime(
        this.naiwaVolume * this.masterGain, this.ctx.currentTime, 0.1)
    }
    if (this._heartbeatGain) {
      this._heartbeatGain.gain.setTargetAtTime(
        (this._heartbeatVol || 0.7) * this.masterGain, this.ctx.currentTime, 0.1)
    }
  }

  setNaiwaVolume(v) { this.naiwaVolume = THREE.MathUtils.clamp(v, 0, 1) }
  setHeartbeatVolume(v) {
    this._heartbeatVol = THREE.MathUtils.clamp(v, 0, 1)
    if (this._heartbeatGain) {
      this._heartbeatGain.gain.setTargetAtTime(
        this._heartbeatVol * this.masterGain, this.ctx.currentTime, 0.1)
    }
  }
  setBGMVolume(v) { this._bgmVolume = THREE.MathUtils.clamp(v, 0, 1) }
  setSFXVolume(v) { this.sfxVolume = THREE.MathUtils.clamp(v, 0, 1) }

  getVolumes() {
    return {
      master: this.masterGain,
      naiwa: this.naiwaVolume,
      heartbeat: this._heartbeatVol || 0.7,
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
    this.stopNaiwaSound()
    this.stopHeartbeat()
    this.stopBGM()
    if (this.ctx && this.ctx.state !== 'closed') this.ctx.close()
    this.ctx = null
  }
}
