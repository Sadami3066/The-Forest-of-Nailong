import * as THREE from 'three'
import nailongGifUrl from '../assets/picture/奶龙大笑.gif'

/**
 * GameEngine — 3D 森林场景
 * 极暗环境 + 树木 + 地面，奶蛙不可视
 */
export class GameEngine {
  constructor() {
    this.scene = null
    this.camera = null
    this.renderer = null
    this.raycaster = null
    this.naiwaCollider = null
    this.hitFlashMesh = null
    this.hitFlashTimer = null
    this.isRunning = false

    // 残影（保留用于将来可能的功能）
    this._afterimages = []
    this._afterimageTexture = null
    this._afterimagesEnabled = false
  }

  init(canvas) {
    try {
      const w = canvas.clientWidth || canvas.width || window.innerWidth || 800
      const h = canvas.clientHeight || canvas.height || window.innerHeight || 600
      canvas.width = w
      canvas.height = h

      // 极暗场景
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0x000206)
      this.scene.fog = new THREE.Fog(0x000206, 3, 14)

      // 相机 — 竖屏FOV更大
      const aspect = w / Math.max(h, 1)
      const fov = aspect < 1 ? 100 : 75
      this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 60)
      this.camera.position.set(0, 1.6, 0)

      // 渲染器
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
      this.renderer.setSize(w, h, false)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      this.renderer.setClearColor(0x000206)

      // 射线检测
      this.raycaster = new THREE.Raycaster()

      // 场景元素
      this._createGround()
      this._createTrees()
      this._createNaiwaCollider()
      this._createHitFlash()

      // resize
      this._resizeCanvas = canvas
      this._onResizeHandler = () => this._onResize(this._resizeCanvas)
      window.addEventListener('resize', this._onResizeHandler)

      this.isRunning = true
      this.renderer.render(this.scene, this.camera)
      console.log('Forest scene initialized', { w, h, fov })
    } catch (e) {
      console.error('GameEngine.init failed:', e)
      throw e
    }
  }

  // ==================== 地面 ====================

  _createGround() {
    // 深色森林地面
    const groundGeo = new THREE.CircleGeometry(16, 48)
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a06,
      side: THREE.DoubleSide,
      depthWrite: true
    })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -1.6
    this.scene.add(ground)

    // 内圈稍亮（玩家脚下空地）
    const innerGeo = new THREE.CircleGeometry(4, 32)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x111108,
      side: THREE.DoubleSide,
      depthWrite: true
    })
    const inner = new THREE.Mesh(innerGeo, innerMat)
    inner.rotation.x = -Math.PI / 2
    inner.position.y = -1.59
    this.scene.add(inner)
  }

  // ==================== 树木 ====================

  _createTrees() {
    const treeCount = 35
    const minDist = 5
    const maxDist = 15

    for (let i = 0; i < treeCount; i++) {
      const angle = (i / treeCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
      const dist = minDist + Math.random() * (maxDist - minDist)
      const x = Math.cos(angle) * dist
      const z = Math.sin(angle) * dist
      const height = 3 + Math.random() * 4
      const radius = 0.15 + Math.random() * 0.3

      // 树干
      const trunkGeo = new THREE.CylinderGeometry(radius * 0.7, radius, height, 8)
      const darkness = 0.03 + Math.random() * 0.04
      const trunkMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(darkness, darkness * 0.8, darkness * 0.5)
      })
      const trunk = new THREE.Mesh(trunkGeo, trunkMat)
      trunk.position.set(x, -1.6 + height / 2, z)
      trunk.castShadow = false
      trunk.receiveShadow = false
      this.scene.add(trunk)

      // 树冠（更大更暗的多边形）
      const crownGeo = new THREE.ConeGeometry(0.8 + Math.random() * 1.2, 2 + Math.random() * 3, 8)
      const crownDarkness = 0.02 + Math.random() * 0.03
      const crownMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(crownDarkness, crownDarkness * 1.2, crownDarkness * 0.6)
      })
      const crown = new THREE.Mesh(crownGeo, crownMat)
      crown.position.set(x, -1.6 + height + 1, z)
      this.scene.add(crown)
    }
  }

  // ==================== 碰撞体 ====================

  _createNaiwaCollider() {
    const geo = new THREE.SphereGeometry(0.84, 16, 16)
    const mat = new THREE.MeshBasicMaterial({ visible: false })
    this.naiwaCollider = new THREE.Mesh(geo, mat)
    this.naiwaCollider.visible = false
    this.scene.add(this.naiwaCollider)
  }

  _createHitFlash() {
    const geo = new THREE.SphereGeometry(1.8, 16, 16)
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    this.hitFlashMesh = new THREE.Mesh(geo, mat)
    this.hitFlashMesh.visible = false
    this.scene.add(this.hitFlashMesh)
  }

  // ==================== 位置 / 射线 ====================

  setNaiwaPosition(x, y, z) {
    if (this.naiwaCollider) {
      this.naiwaCollider.position.set(x, y, z)
    }
  }

  checkAim() {
    if (!this.naiwaCollider) return { hit: false, distance: Infinity, point: null }
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera)
    const wasVisible = this.naiwaCollider.visible
    this.naiwaCollider.visible = true
    const intersects = this.raycaster.intersectObject(this.naiwaCollider)
    this.naiwaCollider.visible = wasVisible
    if (intersects.length > 0) {
      return { hit: true, distance: intersects[0].distance, point: intersects[0].point.clone() }
    }
    return { hit: false, distance: Infinity, point: null }
  }

  showHitFlash(position) {
    if (!this.hitFlashMesh) return
    this.hitFlashMesh.position.copy(position)
    this.hitFlashMesh.visible = true
    this.hitFlashMesh.material.opacity = 1
    if (this.hitFlashTimer) cancelAnimationFrame(this.hitFlashTimer)
    const start = performance.now()
    const animate = (t) => {
      const op = Math.max(0, 1 - (t - start) / 400)
      this.hitFlashMesh.material.opacity = op
      if (op > 0) this.hitFlashTimer = requestAnimationFrame(animate)
      else this.hitFlashMesh.visible = false
    }
    this.hitFlashTimer = requestAnimationFrame(animate)
  }

  // ==================== 相机 ====================

  updateCameraRotation(euler) {
    this.camera.quaternion.setFromEuler(euler)
  }

  getCameraForward() {
    const f = new THREE.Vector3(0, 0, -1)
    f.applyQuaternion(this.camera.quaternion)
    return f
  }

  // ==================== 渲染 ====================

  render() {
    if (!this.isRunning || !this.renderer || !this.scene || !this.camera) return
    this.renderer.render(this.scene, this.camera)
  }

  // ==================== 残影 ====================

  enableAfterimages() {
    if (this._afterimagesEnabled) return
    this._afterimagesEnabled = true
    const img = new Image()
    img.src = naiwaGifUrl
    img.onload = () => {
      this._afterimageTexture = new THREE.Texture(img)
      this._afterimageTexture.needsUpdate = true
      this._afterimageTexture.colorSpace = THREE.SRGBColorSpace
      for (let i = 0; i < 5; i++) {
        const mat = new THREE.SpriteMaterial({
          map: this._afterimageTexture,
          blending: THREE.AdditiveBlending,
          transparent: true, opacity: 0.08,
          depthWrite: false, depthTest: true
        })
        const s = new THREE.Sprite(mat)
        s.scale.set(2.5, 2.5, 1)
        s.visible = false
        this.scene.add(s)
        this._afterimages.push(s)
      }
    }
  }

  disableAfterimages() {
    this._afterimagesEnabled = false
    this._afterimages.forEach(s => { s.visible = false; s.material?.dispose(); this.scene?.remove(s) })
    this._afterimages = []
    if (this._afterimageTexture) { this._afterimageTexture.dispose(); this._afterimageTexture = null }
  }

  updateAfterimages(positions) {
    if (!this._afterimagesEnabled || !this._afterimages.length) return
    const n = this._afterimages.length
    for (let i = 0; i < n; i++) {
      const idx = positions.length - 1 - i * Math.max(1, Math.floor(positions.length / n))
      if (idx >= 0 && idx < positions.length) {
        this._afterimages[i].position.copy(positions[idx])
        this._afterimages[i].visible = true
        this._afterimages[i].material.opacity = 0.03 + (1 - i / n) * 0.05
      } else {
        this._afterimages[i].visible = false
      }
    }
  }

  // ==================== resize / dispose ====================

  _onResize(canvas) {
    const w = canvas.clientWidth || window.innerWidth || 800
    const h = canvas.clientHeight || window.innerHeight || 600
    const aspect = w / Math.max(h, 1)
    const newFov = aspect < 1 ? 100 : 75
    if (newFov !== this.camera?.fov) this.camera.fov = newFov
    if (this.camera) { this.camera.aspect = aspect; this.camera.updateProjectionMatrix() }
    if (this.renderer) this.renderer.setSize(w, h)
  }

  dispose() {
    this.isRunning = false
    if (this.hitFlashTimer) cancelAnimationFrame(this.hitFlashTimer)
    if (this._onResizeHandler) window.removeEventListener('resize', this._onResizeHandler)
    this.disableAfterimages()
    this.renderer?.dispose()
    this.scene?.clear()
    this.scene = null
    this.renderer = null
  }
}
