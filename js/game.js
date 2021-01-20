'use strict';

const canvas = document.querySelector('#game');

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

const canvasLimitX = canvas.width;
const canvasLimitY = canvas.height;
const cloudNumber = 20;
const clouds = [];
const spaceShip = new Spaceship(ctx);
let airplaneXMovement = 0;
let airplaneYMovement = 0;
const airplaneSpeed = 10;

for (let cloud = 0; cloud < cloudNumber; cloud++) {
  clouds.push(new Cloud(ctx));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  clouds.forEach(e => {
    e.drawCloud();
  });
  spaceShip.drawSpaceship(airplaneXMovement, airplaneYMovement);
  requestAnimationFrame(draw);
}

draw();

document.addEventListener('mousemove', (e) => {
  if (airplaneXMovement < 0) {
    airplaneXMovement = 0;
  } else
    if (airplaneXMovement > canvasLimitX) {
      airplaneXMovement = canvasLimitX;
    }

  airplaneXMovement = e.clientX - canvas.offsetLeft - 200;


  if (airplaneYMovement > canvasLimitY) {
    airplaneYMovement = canvasLimitY;
  } else
    if (airplaneYMovement < 0) {
      airplaneYMovement = 0;
    }

  airplaneYMovement = e.clientY - 175;

});

