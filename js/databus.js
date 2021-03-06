import Pool from './base/pool'

let instance

/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.pool = new Pool()

    this.reset()
  }

  reset() {
    this.frame      = 0
    this.startTime  = + new Date()
    this.duration   = 0
    this.animations = []
    this.gameOver   = false
    this.gamePause  = false
    this.level      = 1
    this.missiles   = []
    this.sponsorDaddies = []
  }

  handleDirection(direction) {
    if (this[direction]) {
      return;
    }
    this[direction] = true
  }

  handleOffDirection(direction) {
    if (!this[direction]) {
      return;
    }
    this[direction] = false
  }

  // /**
  //  * 回收敌人，进入对象池
  //  * 此后不进入帧循环
  //  */
  // removeEnemey(enemy) {
  //   let temp = this.enemys.shift()

  //   temp.visible = false

  //   this.pool.recover('enemy', enemy)
  // }

  /**
   * 回收赞助商爸爸，进入对象池
   * 此后不进入帧循环
   */
  removeSponsorDaddy(sponsorDaddy) {
    let temp = this.sponsorDaddies.shift()

    sponsorDaddy.visible = false

    this.pool.recover('sponsorDaddy', sponsorDaddy)
  }
}
