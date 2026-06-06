import * as THREE from 'three'

/**
 * NailongController — 奶龙AI
 * 从森林随机位置生成，向玩家移动，发出笑声
 * 到达玩家2单位内 → 游戏失败
 */
export class NailongController {
  constructor() {
    this.position = new THREE.Vector3()
    this._target = new THREE.Vector3()   // 目标 = 玩家位置
    this._velocity = new THREE.Vector3()

    this.state = 'idle'     // idle | moving | hit
    this._hitTimer = 0
    this._moveSpeed = 0

    this.config = {
      minSpawnDist: 10,     // 最小生成距离
      maxSpawnDist: 16,     // 最大生成距离
      minSpeed: 0.8,        // 最慢速度 单位/秒
      maxSpeed: 2.5,        // 最快速度 单位/秒
      killDistance: 2.0,    // 触碰距离（≤此距离 → 失败）
      hitCooldown: 2.0      // 被照中后冷却时间
    }
  }

  reset() {
    this.state = 'idle'
    this._hitTimer = 0
  }

  /**
   * 在森林中随机位置生成
   */
  spawn(playerPos = new THREE.Vector3(), avoidPos = null) {
    this.position.copy(this._randomForestPoint(playerPos, avoidPos))
    this._moveSpeed = this.config.minSpeed +
      Math.random() * (this.config.maxSpeed - this.config.minSpeed)
    this.state = 'moving'
    this._hitTimer = 0
  }

  /**
   * 被手电筒照中
   */
  onHit() {
    this.state = 'hit'
    this._hitTimer = this.config.hitCooldown
  }

  /**
   * 每帧更新 —— 向玩家移动
   * @returns {{ gameOver: boolean }}
   */
  update(dt, playerPos) {
    if (this.state === 'hit') {
      this._hitTimer -= dt
      if (this._hitTimer <= 0) {
        this.spawn(playerPos, this.position.clone())
      }
      return { gameOver: false }
    }

    if (this.state === 'moving') {
      // 计算朝向玩家的方向
      const dir = new THREE.Vector3().subVectors(playerPos, this.position)
      const dist = dir.length()

      // 到达玩家身边 → 失败
      if (dist <= this.config.killDistance) {
        return { gameOver: true }
      }

      // 向玩家移动
      dir.normalize()
      this.position.add(dir.multiplyScalar(this._moveSpeed * dt))
    }

    // 边界约束
    const distFromCenter = this.position.length()
    if (distFromCenter > this.config.maxSpawnDist) {
      this.position.normalize().multiplyScalar(this.config.maxSpawnDist - 0.5)
    }

    return { gameOver: false }
  }

  /**
   * 奶龙到玩家的距离
   */
  distanceTo(playerPos = new THREE.Vector3()) {
    return this.position.distanceTo(playerPos)
  }

  /**
   * 在森林中随机生成点（避开玩家和旧位置）
   */
  _randomForestPoint(playerPos, avoid = null) {
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2
      const dist = this.config.minSpawnDist +
        Math.random() * (this.config.maxSpawnDist - this.config.minSpawnDist)
      const y = -1.2 + Math.random() * 2.0 // 稍微有高度变化
      const point = new THREE.Vector3(
        playerPos.x + Math.cos(angle) * dist,
        playerPos.y + y,
        playerPos.z + Math.sin(angle) * dist
      )
      if (avoid && point.distanceTo(avoid) < 4) continue
      return point
    }
    return new THREE.Vector3(this.config.minSpawnDist, 0, 0)
  }

  dispose() {}
}
