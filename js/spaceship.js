class Spaceship {
  /** @type {CanvasRenderingContext2D} */
  ctx = null;
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawSpaceship(airplaneXMovement = 0, airplaneYMovement = 0) {
    // airplane body
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(200 + airplaneXMovement, 175 + airplaneYMovement);
    this.ctx.lineTo(140 + airplaneXMovement, 175  + airplaneYMovement);
    this.ctx.bezierCurveTo(140 + airplaneXMovement, 175 + airplaneYMovement, 120 + airplaneXMovement, 100 + airplaneYMovement, 120 + airplaneXMovement, 190 + airplaneYMovement);
    this.ctx.bezierCurveTo(120 + airplaneXMovement, 190 + airplaneYMovement, 140 + airplaneXMovement, 190 + airplaneYMovement, 140 + airplaneXMovement, 190 + airplaneYMovement);
    this.ctx.lineTo(270 + airplaneXMovement, 190 + airplaneYMovement);
    this.ctx.bezierCurveTo(270 + airplaneXMovement, 190 + airplaneYMovement, 280 + airplaneXMovement, 180 + airplaneYMovement, 240 + airplaneXMovement, 170 + airplaneYMovement);
    this.ctx.bezierCurveTo(240 + airplaneXMovement, 170 + airplaneYMovement, 230 + airplaneXMovement, 170 + airplaneYMovement, 200 + airplaneXMovement, 175 + airplaneYMovement);
    this.ctx.fillStyle = 'rgb(70, 70, 70)';
    this.ctx.fill();
    this.ctx.strokeStyle = 'rgb(110, 110, 110)';
    this.ctx.stroke();
    this.ctx.closePath();

    // airplane right wing
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(190 + airplaneXMovement, 175 + airplaneYMovement);
    this.ctx.lineTo(125 + airplaneXMovement, 200 + airplaneYMovement);
    this.ctx.bezierCurveTo(125 + airplaneXMovement, 210 + airplaneYMovement, 140 + airplaneXMovement, 200 + airplaneYMovement, 210 + airplaneXMovement, 180 + airplaneYMovement);
    this.ctx.bezierCurveTo(210 + airplaneXMovement, 180 + airplaneYMovement, 195 + airplaneXMovement, 176 + airplaneYMovement, 190 + airplaneXMovement, 175 + airplaneYMovement);
    this.ctx.fillStyle = 'rgb(70, 70, 70)';
    this.ctx.fill();
    this.ctx.strokeStyle = 'rgb(110, 110, 110)';
    this.ctx.stroke();
  }
}
