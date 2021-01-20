'use stict';

class RainObject {
  rainMoveY = -30;
  rainMoveX = 0;
  randYSpeed = 0;
  canvasLimitY = 0;

  constructor(canvasLimitY) {
    this.canvasLimitY = canvasLimitY;
    this.rainMoveX = this.randomNumber();
    this.randYSpeed = Math.random() * 10;
  }

  drawRain() {
    if (this.rainMoveY > this.canvasLimitY + 30) this.rainMoveY = 0;
    this.rainMoveY += this.randYSpeed;
    ctx.beginPath();
    ctx.rect(this.rainMoveX, this.rainMoveY, 5, 5);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
  }

  randomNumber() {
    const randomNumber = Math.random();
    const randResult = randomNumber * 1000;

    if (randResult < 405) {
      return randResult;
    } else {
      return this.randomNumber();
    }
  }
}