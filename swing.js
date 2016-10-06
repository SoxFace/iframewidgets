
var windowW = window.innerWidth;
var windowH = window.innerHeight;
var scalerX = windowW / 640;
var scalerY = windowH / 480;
var scaler = scalerX;
if (scalerY < scalerX) {
  scaler = scalerY;
}
var canvas;
var ctx;
var canvasWidth = windowW;
var canvasHeight = windowH;
var title = "PG.Futures is the"
var title2 = "best team ever!!!" // leave as "" if not required
var titlePos;

var font30;
var font50;

var voteTotal = 0;
var voteYes = 0;
var voteNo = 0;
var yesPercent = 0;
var voteModifier = 0;
var indicatorPosition = 0;

rescale();
drawit();

function resize() {
  rescale();
  drawit();
}

function drawit() {
  //
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw the question title
  ctx.font = font30;
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(title, titlePos, 35 * scaler);
  if (title2 != "") {
    ctx.fillText(title2, titlePos, 70 * scaler);
  }
  // draw outline
  ctx.lineWidth = 1 * scaler;
  ctx.beginPath();
  ctx.moveTo(centreX, canvasHeight - (50 * scaler));
  ctx.arc(centreX, canvasHeight - (50 * scaler), canvasHeight - (150 * scaler), 1.25 * Math.PI, 1.75 * Math.PI, 0);
  ctx.closePath();
  ctx.stroke();
  // draw the swing chart
  voteTotal = voteYes + voteNo;
  if (voteTotal > 0) {
    yesPercent = voteYes / voteTotal;
    voteModifier = 1.25 + (0.5 * yesPercent);
    // draw no arc highlight (complete arc)
    ctx.fillStyle = "#f55";
    ctx.beginPath();
    ctx.moveTo(centreX, canvasHeight - (50 * scaler));
    ctx.arc(centreX, canvasHeight - (50 * scaler), canvasHeight - (150 * scaler), 1.25 * Math.PI, 1.75 * Math.PI, 0);
    ctx.closePath();
    ctx.fill();
    // draw no arc (complete arc)
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.moveTo(centreX, canvasHeight - (50 * scaler));
    ctx.arc(centreX, canvasHeight - (50 * scaler), canvasHeight - (160 * scaler), 1.25 * Math.PI, 1.75 * Math.PI, 0);
    ctx.closePath();
    ctx.fill();
    // draw yes vote highlight
    ctx.fillStyle = "#9d9";
    ctx.beginPath();
    ctx.moveTo(centreX, canvasHeight - (50 * scaler));
    //arc(x,y,r,sAngle,eAngle,counterclockwise);
    ctx.arc(centreX, canvasHeight - (50 * scaler), canvasHeight - (150 * scaler), 1.25 * Math.PI, voteModifier * Math.PI, 0);
    ctx.closePath();
    ctx.fill();
    // draw yes vote
    ctx.fillStyle = "#0d0";
    ctx.beginPath();
    ctx.moveTo(centreX, canvasHeight - (50 * scaler));
    //arc(x,y,r,sAngle,eAngle,counterclockwise);
    ctx.arc(centreX, canvasHeight - (50 * scaler), canvasHeight - (160 * scaler), 1.25 * Math.PI, voteModifier * Math.PI, 0);
    ctx.closePath();
    ctx.fill();
    if (voteYes == 0 && voteNo > 0) {
      indicatorPosition = 1.25
    } else if (voteNo == 0 && voteYes > 0) {
      indicatorPosition = 1.75
    } else if (voteYes > 0 && voteNo > 0) {
      indicatorPosition = voteModifier
    }
    if (voteYes > 0 || voteNo > 0) {
      // draw the indicator line
      ctx.fillStyle = "#000";
      ctx.lineWidth = 4 * scaler;
      ctx.beginPath();
      ctx.moveTo(centreX, canvasHeight - (50 * scaler));
      var xs = (canvasHeight - (145 * scaler)) * Math.cos(indicatorPosition * Math.PI);
      var ys = (canvasHeight - (145 * scaler)) * Math.sin(indicatorPosition * Math.PI);
      ctx.lineTo(centreX + xs, (canvasHeight - (50 * scaler)) + ys);
      ctx.stroke();
      // draw dot
      ctx.beginPath();
      ctx.arc(centreX, canvasHeight - (50 * scaler), 5 * scaler, 0, 2 * Math.PI, 0);
      ctx.fill();
    }
  }
  //
  ctx.font = font50;
  // draw the buttons
  ctx.fillStyle = "#00cc00";
  roundRect(ctx, centreX - 260 * scaler, canvasHeight - (120 * scaler), 120 * scaler, 80 * scaler, 10 * scaler, true, false);
  ctx.fillText(voteYes, centreX - 200 * scaler, canvasHeight - (140 * scaler));
  ctx.fillStyle = "#ff0000";
  roundRect(ctx, centreX + 140 * scaler, canvasHeight - (120 * scaler), 120 * scaler, 80 * scaler, 10 * scaler, true, false);
  ctx.fillText(voteNo, centreX + 200 * scaler, canvasHeight - (140 * scaler));
  ctx.fillStyle = "#fff";
  ctx.fillText("YES", centreX - 200 * scaler, canvasHeight - (60 * scaler));
  ctx.fillText("NO", centreX + 200 * scaler, canvasHeight - (60 * scaler));
}
/////

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
}

/////////////////////

// always return 1, except at non-default zoom levels in IE before version 8
function GetZoomFactor() {
  var factor = 1;
  if (document.body.getBoundingClientRect) {
    // rect is only in physical pixel size in IE before version 8
    var rect = document.body.getBoundingClientRect();
    var physicalW = rect.right - rect.left;
    var logicalW = document.body.offsetWidth;
    // the zoom level is always an integer percent value
    factor = Math.round((physicalW / logicalW) * 100) / 100;
  }
  return factor;
}

function GetScrollPositions() {
  if ('pageXOffset' in window) { // all browsers, except IE before version 9
    var scrollLeft = window.pageXOffset;
    var scrollTop = window.pageYOffset;
  } else { // Internet Explorer before version 9
    var zoomFactor = GetZoomFactor();
    var scrollLeft = Math.round(document.documentElement.scrollLeft / zoomFactor);
    var scrollTop = Math.round(document.documentElement.scrollTop / zoomFactor);
  }
  theScrollLeft = scrollLeft;
  theScrollTop = scrollTop;
}
//////////
// work out the mouse position taking into account the canvas and window positions
function getMousePos(canvas, evt) {
  // get canvas position
  var obj = canvas;
  var top = 0;
  var left = 0;
  while (obj && obj.tagName != 'BODY') {
    top += obj.offsetTop;
    left += obj.offsetLeft;
    obj = obj.offsetParent;
  }
  // return relative mouse position
  GetScrollPositions();
  //
  var mX = evt.clientX - left + theScrollLeft;
  var mY = evt.clientY - top + theScrollTop;
  return {
    x: mX,
    y: mY
  };
}

function getTouchPos(canvas, evt) {
  // get canvas position
  var obj = canvas;
  var top = 0;
  var left = 0;
  while (obj && obj.tagName != 'BODY') {
    top += obj.offsetTop;
    left += obj.offsetLeft;
    obj = obj.offsetParent;
  }
  // return relative mouse position
  var theroot = document.documentElement;
  var mX = evt.touches[0].pageX - left + theroot.scrollLeft;
  var mY = evt.touches[0].pageY - top + theroot.scrollTop;
  return {
    x: mX,
    y: mY
  };
}

function doMouse() {
  // test which choice clicked on
  if (mouseX >= centreX - 260 * scaler && mouseX <= (centreX - 260 * scaler) + (120 * scaler)) {
    if (mouseY >= canvasHeight - (200 * scaler) && mouseY <= canvasHeight - (40 * scaler)) {
      // clicked on yes
      voteYes++;
      drawit();
    }
  }
  if (mouseX >= centreX + 140 * scaler && mouseX <= (centreX + 140 * scaler) + (120 * scaler)) {
    if (mouseY >= canvasHeight - (200 * scaler) && mouseY <= canvasHeight - (40 * scaler)) {
      // clicked on yes
      voteNo++;
      drawit();
    }
  }
}

function handleMousedown(event) {
  event.preventDefault();
  ev = event || window.event;
  var mousePos = getMousePos(canvas, ev);
  mouseX = mousePos.x;
  mouseY = mousePos.y;
  doMouse();
}

touchStart = function(event) {
  event.preventDefault();
  var touchPos = getTouchPos(canvas, event);
  mouseX = touchPos.x;
  mouseY = touchPos.y;
  doMouse();
}
//
function rescale() {
  windowW = window.innerWidth;
  windowH = window.innerHeight;
  scalerX = windowW / 640;
  scalerY = windowH / 480;
  scaler = scalerX;
  if (scalerY < scalerX) {
    scaler = scalerY;
  }
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  canvasWidth = windowW;
  canvasHeight = windowH;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  centreX = canvas.width * 0.5;
  centreY = canvas.height * 0.5;
  ctx.lineCap = "round";
  font30 = Math.round(30) * scaler + 'px Arial';
  font50 = Math.round(50) * scaler + 'px Arial';
  titlePos = canvasWidth * 0.5;
}
