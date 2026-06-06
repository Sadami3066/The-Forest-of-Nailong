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
      // 初始略微向下看，确保能看到地面
      this.camera.quaternion.setFromEuler(new THREE.Euler(0.15, 0, 0, 'YXZ'))

      // 渲染器
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
      this.renderer.setSize(w, h, false)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      this.renderer.setClearColor(0x000206)

      // 射线检测
      this.raycaster = new THREE.Raycaster()

      // 场景元素
      this._createSky()
      this._createGround()
      this._createTrees()
      this._createFireflies()
      this._createMist()
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

  // ==================== 天空 ====================

  _createSky() {
    // 月亮 — 明亮温暖，高悬天空
    const moonGeo = new THREE.CircleGeometry(3.5, 64)
    const moonMat = new THREE.MeshBasicMaterial({
      color: 0xddcc88,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
      depthWrite: false
    })
    this._moon = new THREE.Mesh(moonGeo, moonMat)
    this._moon.position.set(10, 14, -25)
    this.scene.add(this._moon)

    // 月晕
    const haloGeo = new THREE.CircleGeometry(6, 64)
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xddcc88,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.1,
      depthWrite: false
    })
    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.position.copy(this._moon.position)
    this.scene.add(halo)
    this._moonHalo = halo

    // 星空
    const starCount = 300
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 0.45 + 0.1
      const radius = 22 + Math.random() * 25
      starPositions[i * 3] = Math.cos(theta) * Math.cos(phi) * radius
      starPositions[i * 3 + 1] = Math.sin(phi) * radius + 1.6
      starPositions[i * 3 + 2] = Math.sin(theta) * Math.cos(phi) * radius
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const starMat = new THREE.PointsMaterial({
      color: 0xeeeedd,
      size: 0.25,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    this._stars = new THREE.Points(starGeo, starMat)
    this.scene.add(this._stars)
  }

  // ==================== 地面 ====================

  _createGround() {
    // 主地面 — 可见的暗绿色森林地面
    const groundGeo = new THREE.CircleGeometry(17, 56)
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x1a2a15,
      side: THREE.DoubleSide,
      depthWrite: true
    })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -1.6
    this.scene.add(ground)

    // 内圈 — 稍亮的空地
    const innerGeo = new THREE.CircleGeometry(3.5, 36)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x24301e,
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
    const treeCount = 40
    const minDist = 3.5
    const maxDist = 16

    for (let i = 0; i < treeCount; i++) {
      const angle = (i / treeCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.6
      const dist = minDist + Math.pow(Math.random(), 0.5) * (maxDist - minDist)
      const x = Math.cos(angle) * dist
      const z = Math.sin(angle) * dist
      const height = 2.5 + Math.random() * 6
      const radius = 0.1 + Math.random() * 0.35

      const treeType = Math.random()

      if (treeType < 0.6) {
        // 针叶树 — 三角锥形
        this._createPineTree(x, z, height, radius)
      } else if (treeType < 0.85) {
        // 阔叶树 — 圆柱干 + 球冠
        this._createBroadTree(x, z, height, radius)
      } else {
        // 枯树 — 细干 + 分支
        this._createDeadTree(x, z, height, radius)
      }
    }
  }

  _treeMat(darkness, greenBoost = 1) {
    // 保留暗调但加入绿色：树干偏棕，树冠偏绿
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(
        darkness * 0.6,
        darkness * (0.7 + greenBoost * 0.8),
        darkness * 0.3
      ),
      depthWrite: true
    })
  }

  _createPineTree(x, z, h, r) {
    const d = 0.04 + Math.random() * 0.04
    // 树干
    const trunkGeo = new THREE.CylinderGeometry(r * 0.5, r * 0.8, h * 0.5, 6)
    const trunk = new THREE.Mesh(trunkGeo, this._treeMat(d, 0)) // 树干偏棕
    trunk.position.set(x, -1.6 + h * 0.25, z)
    this.scene.add(trunk)
    // 多层锥形树冠 — 绿色
    const layers = 2 + Math.floor(Math.random() * 2)
    for (let l = 0; l < layers; l++) {
      const crownH = h * (0.35 + l * 0.2)
      const crownR = r * (3 - l * 0.7)
      const crownGeo = new THREE.ConeGeometry(crownR, crownH, 8)
      const crown = new THREE.Mesh(crownGeo, this._treeMat(d, 1.5)) // 树冠偏绿
      crown.position.set(x, -1.6 + h * 0.3 + l * h * 0.25, z)
      this.scene.add(crown)
    }
  }

  _createBroadTree(x, z, h, r) {
    const d = 0.035 + Math.random() * 0.035
    const trunkGeo = new THREE.CylinderGeometry(r * 0.5, r * 0.7, h * 0.55, 8)
    const trunk = new THREE.Mesh(trunkGeo, this._treeMat(d, 0))
    trunk.position.set(x, -1.6 + h * 0.27, z)
    this.scene.add(trunk)
    // 球形树冠 — 绿色
    const crownGeo = new THREE.SphereGeometry(r * 2.5, 8, 6)
    const crown = new THREE.Mesh(crownGeo, this._treeMat(d, 1.6))
    crown.position.set(x, -1.6 + h * 0.6, z)
    crown.scale.y = 0.7
    this.scene.add(crown)
  }

  _createDeadTree(x, z, h, r) {
    const d = 0.05 + Math.random() * 0.03
    const trunkGeo = new THREE.CylinderGeometry(r * 0.4, r * 0.6, h, 5)
    const trunk = new THREE.Mesh(trunkGeo, this._treeMat(d, 0))
    trunk.position.set(x, -1.6 + h * 0.5, z)
    this.scene.add(trunk)
    for (let b = 0; b < 3; b++) {
      const branchLen = r * 3
      const branchGeo = new THREE.CylinderGeometry(r * 0.12, r * 0.2, branchLen, 4)
      const branch = new THREE.Mesh(branchGeo, this._treeMat(d, 0.2))
      const bAngle = (b / 3) * Math.PI * 2 + Math.random() * 0.5
      const bHeight = -1.6 + h * (0.4 + Math.random() * 0.4)
      branch.position.set(
        x + Math.cos(bAngle) * branchLen * 0.5, bHeight,
        z + Math.sin(bAngle) * branchLen * 0.5
      )
      branch.rotation.z = (Math.random() - 0.5) * 1.2
      branch.rotation.y = bAngle
      this.scene.add(branch)
    }
  }

  // ==================== 萤火虫 ====================

  _createFireflies() {
    const count = 30
    this._fireflies = []
    for (let i = 0; i < count; i++) {
      const geo = new THREE.SphereGeometry(0.04, 4, 4)
      const mat = new THREE.MeshBasicMaterial({
        color: 0xaacc66,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
      const fly = new THREE.Mesh(geo, mat)
      fly.userData = {
        baseX: (Math.random() - 0.5) * 24,
        baseY: -1.2 + Math.random() * 4,
        baseZ: (Math.random() - 0.5) * 24,
        speed: 0.3 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        amplitude: 0.2 + Math.random() * 0.6
      }
      fly.position.set(fly.userData.baseX, fly.userData.baseY, fly.userData.baseZ)
      this.scene.add(fly)
      this._fireflies.push(fly)
    }
  }

  // ==================== 地面薄雾 ====================

  _createMist() {
    const count = 50
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = -1.5 + Math.random() * 1.5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0x334433,
      size: 0.6,
      transparent: true,
      opacity: 0.15,
      blending: THREE.NormalBlending,
      depthWrite: false
    })
    this._mist = new THREE.Points(geo, mat)
    this.scene.add(this._mist)
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

    // 萤火虫闪烁
    if (this._fireflies) {
      const t = performance.now() * 0.001
      for (const fly of this._fireflies) {
        const u = fly.userData
        fly.position.x = u.baseX + Math.sin(t * u.speed + u.phase) * u.amplitude
        fly.position.y = u.baseY + Math.cos(t * u.speed * 0.7 + u.phase) * u.amplitude * 0.5
        fly.position.z = u.baseZ + Math.cos(t * u.speed * 0.6 + u.phase + 1) * u.amplitude
        // 呼吸式明暗
        const glow = 0.3 + 0.7 * Math.abs(Math.sin(t * 2 + u.phase))
        fly.material.opacity = glow * 0.6
      }
    }

    // 薄雾缓慢漂移
    if (this._mist) {
      this._mist.rotation.y += 0.0001
    }

    // 月亮始终面朝玩家
    if (this._moon && this.camera) {
      this._moon.lookAt(this.camera.position)
      if (this._moonHalo) this._moonHalo.lookAt(this.camera.position)
    }

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
