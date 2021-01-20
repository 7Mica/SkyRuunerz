'use strict';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const canvasLimitX = canvas.width - 30;
const canvasLimitY = canvas.height - 30;
let rainMoveY = 0;
let rainMoveX = 0;
let positionAtX = 0;
let positionAtY = 0;
const dropletNumber = 200;
const rain = [];

for (let n = 0; n < dropletNumber; n++) {
  rain.push(new RainObject(canvasLimitY));
}

function drawSquare() {
  ctx.beginPath();
  ctx.rect(positionAtX, positionAtY, 30, 30);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSquare();
  rain.forEach(e => {
    e.drawRain();
  });

  requestAnimationFrame(draw);
}

draw();

document.addEventListener('mousemove', (e) => {
  positionAtX = e.clientX - 15 - canvas.offsetLeft;

  if (positionAtX < 0) {
    positionAtX = 0;
  } else
    if (positionAtX > canvasLimitX) {
      positionAtX = canvasLimitX;
    }

  positionAtY = e.clientY - 15;

  if (positionAtY > canvasLimitY) {
    positionAtY = canvasLimitY;
  } else
    if (positionAtY < 0) {
      positionAtY = 0;
    }
});

