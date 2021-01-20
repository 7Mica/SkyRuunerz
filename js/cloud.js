'use strict';

class Cloud {
  randomCloudPositionAtY = 0;
  randomCloudPositionAtX = 0;
  cloudSpeed = 3;
  cloudMovenment = 200;
  randomizeCloudSpeed = 0;

  // Random cloud forms
  randomCloud1 = 0;
  randomCloud2 = 0;
  randomCloud3 = 0;

  constructor() {
    this.randomCloudPositionAtY = this.randomNumber(300);
    this.randomCloudPositionAtX = this.randomNumber(300);

    this.randomizeCloudSpeed = this.randomNumber(2);

    this.randomCloud1 = this.randomNePo() * this.randomNumber(10);
    this.randomCloud2 = this.randomNePo() * this.randomNumber(10);
    this.randomCloud3 = this.randomNePo() * this.randomNumber(10);
  }

  drawCloud() {
    let way = 0;
    this.cloudMovenment = this.cloudMovenment + (-1 * this.randomizeCloudSpeed);
    if (this.cloudMovenment + this.randomCloudPositionAtX < -100) {
      this.randomCloudPositionAtY = this.randomNumber(300);
      this.cloudMovenment = 200;
    }

    way = (this.cloudMovenment + this.randomCloudPositionAtX) * this.cloudSpeed;
    ctx.beginPath();
    ctx.arc(150 + way, this.randomCloudPositionAtY + this.randomCloud1, 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(170 + way, this.randomCloudPositionAtY + this.randomCloud2, 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(130 + way, this.randomCloudPositionAtY + this.randomCloud3, 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200 + way, this.randomCloudPositionAtY + this.randomCloud3, 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill()
    ctx.closePath();
  }

  randomNePo() {
    return Math.round(Math.random()) * 2 - 1;
  }

  randomNumber(multiplo) {
    return Math.random() * multiplo;
  }
}
