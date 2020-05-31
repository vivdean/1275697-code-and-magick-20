'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_CLOUD = 10;
var GAP = 50;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_CLOUD, CLOUD_Y + GAP_CLOUD, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    var barHeight = BAR_MAX_HEIGHT * Math.round(times[i]) / Math.round(maxTime);

    ctx.fillText(players[i],
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - FONT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - barHeight - FONT_GAP * 2,
        BAR_WIDTH,
        barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]),
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - barHeight - GAP);
  }
};

