/**
 * GameState — 游戏状态机
 * 管理状态流转、计时、得分
 */
export const GameState = {
  IDLE: 'idle',
  STARTING: 'starting',
  PLAYING: 'playing',
  ROUND_END: 'round_end',
  GAME_OVER: 'game_over'
}

/**
 * GameStateManager — 游戏状态管理器
 */
export class GameStateManager {
  constructor() {
    this.state = GameState.IDLE
    this.score = 0
    this.kills = 0
    this.shotsFired = 0
    this.timeRemaining = 60
    this.roundTime = 60
    this.bestScore = 0
    this.won = false

    // 回调
    this._onStateChange = null
    this._onScoreChange = null
    this._onTimeChange = null
    this._timerInterval = null

    this._loadBestScore()
  }

  /**
   * 设置回调
   */
  onStateChange(cb) { this._onStateChange = cb }
  onScoreChange(cb) { this._onScoreChange = cb }
  onTimeChange(cb) { this._onTimeChange = cb }

  /**
   * 开始游戏
   */
  start() {
    this.score = 0
    this.kills = 0
    this.shotsFired = 0
    this.timeRemaining = this.roundTime
    this._transition(GameState.STARTING)
  }

  /**
   * 确认准备就绪，进入游戏
   */
  ready() {
    if (this.state === GameState.STARTING) {
      this._transition(GameState.PLAYING)
      this._startTimer()
    }
  }

  /**
   * 记录一次射击
   */
  recordShot() {
    if (this.state !== GameState.PLAYING) return
    this.shotsFired++
  }

  /**
   * 记录击杀
   */
  recordKill() {
    if (this.state !== GameState.PLAYING) return
    this.kills++
    this.score += 100
    if (this._onScoreChange) this._onScoreChange(this.score, this.kills)
  }

  /**
   * 时间到
   */
  _onTimeUp() {
    this._stopTimer()
    this._transition(GameState.GAME_OVER)

    // 更新最佳成绩
    if (this.score > this.bestScore) {
      this.bestScore = this.score
      this._saveBestScore()
    }
  }

  /**
   * 游戏结束（胜利或失败）
   */
  endGame() {
    this._stopTimer()
    this._transition(GameState.GAME_OVER)
    if (this.score > this.bestScore) {
      this.bestScore = this.score
      this._saveBestScore()
    }
  }

  /**
   * 返回主菜单
   */
  backToMenu() {
    this._stopTimer()
    this._transition(GameState.IDLE)
  }

  /**
   * 获取精度
   */
  getAccuracy() {
    if (this.shotsFired === 0) return 0
    return Math.round((this.kills / this.shotsFired) * 100)
  }

  _transition(newState) {
    const oldState = this.state
    this.state = newState
    if (this._onStateChange) this._onStateChange(newState, oldState)
  }

  _startTimer() {
    this._stopTimer()
    this._timerInterval = setInterval(() => {
      this.timeRemaining--
      if (this._onTimeChange) this._onTimeChange(this.timeRemaining)
      if (this.timeRemaining <= 0) {
        this._onTimeUp()
      }
    }, 1000)
  }

  _stopTimer() {
    if (this._timerInterval) {
      clearInterval(this._timerInterval)
      this._timerInterval = null
    }
  }

  _loadBestScore() {
    try {
      const saved = localStorage.getItem('kill_naiwa_best')
      if (saved) this.bestScore = parseInt(saved, 10) || 0
    } catch (e) { /* ignore */ }
  }

  _saveBestScore() {
    try {
      localStorage.setItem('kill_naiwa_best', String(this.bestScore))
    } catch (e) { /* ignore */ }
  }

  dispose() {
    this._stopTimer()
  }
}
