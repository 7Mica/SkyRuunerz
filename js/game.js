'use strict';

const canvas = document.querySelector('#game');

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

const canvasLimitX = canvas.width;
const canvasLimitY = canvas.height;
const cloudNumber = 20;
const clouds = [];

for (let cloud = 0; cloud < cloudNumber; cloud++) {
  clouds.push(new Cloud());
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  clouds.forEach(e => {
    e.drawCloud();
  });

  requestAnimationFrame(draw);
}

draw();
