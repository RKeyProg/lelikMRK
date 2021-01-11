$(document).ready(function () {
  startPipresGame();
});

let amplitude = getRandomInt(-225, 225);
let changesAmplitude = getRandomInt(-225, 225);
const controller = $('.pipres__controller-input');

function startPipresGame() {
  let canvas = document.getElementById("pipres__canvas");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawStaticCurves(context, step);
  drawCurves(context, step);

  step += 5;
  window.requestAnimationFrame(startPipresGame);
}

controller.change(function () {
  changesAmplitude = this.value;
  if (amplitude - 10 <= changesAmplitude && changesAmplitude <= amplitude + 10) {
    changesAmplitude = amplitude;
    controller.prop('disabled', true);
    setTimeout(() => {
      let mrcoins = +localStorage.getItem('mrcoins');
      mrcoins += 200;
      localStorage.setItem('mrcoins', mrcoins);

      const mrcoinsView = $('.personal-balance__number');
      mrcoinsView.text(localStorage.getItem('mrcoins'));

      let gamesComplited = localStorage.getItem('gamesComplited');
      let gamesComplitedNew = gamesComplited.split(',');
      gamesComplitedNew.push('pipres');
      localStorage.setItem('gamesComplited', gamesComplitedNew);

      alert('+200 MRCoins');
    }, 100);
  }
})

let step = -4;

function drawCurves(ctx, step) {
  let width = ctx.canvas.width;
  let height = ctx.canvas.height;
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "rgb(0, 188, 212)";

  let x = 0;
  let y = 0;
  let frequency = 90;
  while (y < height) {
    x = width / 2 + changesAmplitude * Math.sin((y + step) / frequency);
    ctx.lineTo(x, y);
    y++;
  }
  ctx.stroke();
}

function drawStaticCurves(ctx, step) {
  let width = ctx.canvas.width;
  let height = ctx.canvas.height;
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgba(186, 186, 186, .2)";

  let x = 0;
  let y = 0;
  let frequency = 90;
  while (y < height) {
    x = width / 2 + amplitude * Math.sin((y + step) / frequency);
    ctx.lineTo(x, y);
    y++;
  }
  ctx.stroke();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}