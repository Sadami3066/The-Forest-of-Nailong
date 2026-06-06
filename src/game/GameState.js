export const GameState = {
  IDLE: 'idle', STARTING: 'starting', PLAYING: 'playing',
  GAME_OVER: 'game_over'
}

// 成就定义
export const ACHIEVEMENTS = [
  { id: 'first_kill', name: '新手猎人', icon: '🌱', desc: '首次照中奶蛙', threshold: 1 },
  { id: 'hunter_10', name: '森林巡护', icon: '🔦', desc: '累计照中10次', threshold: 10 },
  { id: 'hunter_30', name: '黑暗猎手', icon: '⚔️', desc: '累计照中30次', threshold: 30 },
  { id: 'hunter_60', name: '暗夜传说', icon: '👻', desc: '累计照中60次', threshold: 60 },
  { id: 'hunter_100', name: '奶蛙克星', icon: '🏆', desc: '累计照中100次', threshold: 100 }
]

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

    // Combo
    this.combo = 0
    this.maxCombo = 0

    // 成就
    this.totalKills = 0       // 累计照中（跨局）
    this._unlockedAchievements = []
    this._justUnlocked = []    // 本局新解锁

    // 排行榜
    this._leaderboard = []

    this._timerInterval = null
    this._loadPersistent()
  }

  start() {
    this.score = 0
    this.kills = 0
    this.shotsFired = 0
    this.timeRemaining = this.roundTime
    this.combo = 0
    this.maxCombo = 0
    this._justUnlocked = []
    this._transition(GameState.STARTING)
  }

  ready() {
    if (this.state === GameState.STARTING) {
      this._transition(GameState.PLAYING)
      this._startTimer()
    }
  }

  recordShot() {
    if (this.state !== GameState.PLAYING) return
    this.shotsFired++
  }

  recordKill() {
    if (this.state !== GameState.PLAYING) return
    this.kills++
    this.totalKills++
    this.combo++
    if (this.combo > this.maxCombo) this.maxCombo = this.combo
    const multiplier = Math.min(this.combo, 5)
    this.score += 100 * multiplier

    // 检查成就
    this._checkAchievements()
  }

  recordMiss() {
    this.combo = 0
  }

  getMultiplier() {
    return Math.min(this.combo, 5)
  }

  _checkAchievements() {
    for (const a of ACHIEVEMENTS) {
      if (this.totalKills >= a.threshold && !this._unlockedAchievements.includes(a.id)) {
        this._unlockedAchievements.push(a.id)
        this._justUnlocked.push(a)
      }
    }
  }

  getJustUnlocked() {
    return this._justUnlocked
  }

  getUnlockedAchievements() {
    return ACHIEVEMENTS.filter(a => this._unlockedAchievements.includes(a.id))
  }

  // 排行榜
  addToLeaderboard() {
    const entry = { score: this.score, kills: this.kills, combo: this.maxCombo, won: this.won, date: Date.now() }
    this._leaderboard.push(entry)
    this._leaderboard.sort((a, b) => b.score - a.score)
    this._leaderboard = this._leaderboard.slice(0, 10)
    this._savePersistent()
    return this._leaderboard.findIndex(e => e === entry) + 1
  }

  getLeaderboard() {
    return this._leaderboard
  }

  getRank() {
    if (this._leaderboard.length === 0) return 1
    // 当前分数在排行榜中的位置
    let rank = 1
    for (const e of this._leaderboard) {
      if (this.score > e.score) break
      rank++
    }
    return rank
  }

  // 评级
  getRating() {
    const accuracy = this.shotsFired > 0 ? this.kills / this.shotsFired : 0
    if (this.won && accuracy >= 0.7) return 'S'
    if (this.won && accuracy >= 0.5) return 'A'
    if (this.won) return 'B'
    if (this.kills >= 3) return 'C'
    return 'D'
  }

  endGame() {
    this._stopTimer()
    this._transition(GameState.GAME_OVER)
    if (this.score > this.bestScore) {
      this.bestScore = this.score
      this._savePersistent()
    }
    this.addToLeaderboard()
  }

  backToMenu() {
    this._stopTimer()
    this._transition(GameState.IDLE)
  }

  getAccuracy() {
    if (this.shotsFired === 0) return 0
    return Math.round((this.kills / this.shotsFired) * 100)
  }

  _transition(newState) {
    this.state = newState
  }

  _startTimer() {
    this._stopTimer()
    this._timerInterval = setInterval(() => {
      this.timeRemaining--
      if (this.timeRemaining <= 0) this._stopTimer()
    }, 1000)
  }

  _stopTimer() {
    if (this._timerInterval) { clearInterval(this._timerInterval); this._timerInterval = null }
  }

  _loadPersistent() {
    try {
      const a = localStorage.getItem('nw_achievements')
      if (a) this._unlockedAchievements = JSON.parse(a)
      const t = localStorage.getItem('nw_totalKills')
      if (t) this.totalKills = parseInt(t) || 0
      const s = localStorage.getItem('nw_bestScore')
      if (s) this.bestScore = parseInt(s) || 0
      const l = localStorage.getItem('nw_leaderboard')
      if (l) this._leaderboard = JSON.parse(l)
    } catch {}
  }

  _savePersistent() {
    try {
      localStorage.setItem('nw_achievements', JSON.stringify(this._unlockedAchievements))
      localStorage.setItem('nw_totalKills', String(this.totalKills))
      localStorage.setItem('nw_bestScore', String(this.bestScore))
      localStorage.setItem('nw_leaderboard', JSON.stringify(this._leaderboard))
    } catch {}
  }

  dispose() { this._stopTimer() }
}
