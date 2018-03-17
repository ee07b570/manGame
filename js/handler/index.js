import HandlerBtn, { DIRECTION } from './handlerBtn'
import { HANDLER_BOTTOM_PADDIND, HANDLER_BTN_WIDTH as BTN_WIDTH } from './../config'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const UP_BTN_IMG_SRC = 'images/hero.png'
const DOWN_BTN_IMG_SRC = 'images/hero.png'
const LEFT_BTN_IMG_SRC = 'images/hero.png'
const RIGHT_BTN_IMG_SRC = 'images/hero.png'

export default class Handler {
  constructor() {
    const horizontalCenter = screenWidth / 2
    const verticalCener = screenHeight - HANDLER_BOTTOM_PADDIND - 1.5 * BTN_WIDTH

    this.upBtn = new HandlerBtn(UP_BTN_IMG_SRC, DIRECTION.UP, horizontalCenter, verticalCener - BTN_WIDTH)
    this.downBtn = new HandlerBtn(DOWN_BTN_IMG_SRC, DIRECTION.DOWN, horizontalCenter, verticalCener + BTN_WIDTH)
    this.leftBtn = new HandlerBtn(LEFT_BTN_IMG_SRC, DIRECTION.LEFT, horizontalCenter - BTN_WIDTH, verticalCener)
    this.rightBtn = new HandlerBtn(RIGHT_BTN_IMG_SRC, DIRECTION.RIGHT, horizontalCenter + BTN_WIDTH, verticalCener)
  }

  render(ctx) {
    this.upBtn.drawToCanvas(ctx)
    this.downBtn.drawToCanvas(ctx)
    this.leftBtn.drawToCanvas(ctx)
    this.rightBtn.drawToCanvas(ctx)
  }
}