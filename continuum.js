var windowW=window.innerWidth;
var windowH=window.innerHeight;
var scalerX=windowW/640;
var scalerY=windowH/480;
var scaler=scalerX;
if (scalerY<scalerX){
	scaler=scalerY;
}
//
var title= "Click to place an 'X' where you would"
var title2="position yourself on the scale"// leave as empty string if not required
var cap= "masculine" // lefthand caption
var cap2="feminine"// righthand caption

//
var topOffset;
var leftTextOffset;
var rightTextOffset;
//
var gridchunks=11;
//
var canvas;
var ctx;
var canvasWidth=windowW;
var canvasHeight=windowH;
var totalgrid=gridchunks*gridchunks;
var gridSizeWidth = Math.floor(canvasWidth/gridchunks);
var gridSizeHeight = Math.floor(canvasHeight/gridchunks);
var xg=-1;
var yg=-1;
var mouseX;
var mouseY;
var fontSizeT=30;
var fontSizeC=30;
var fntTitle;
var fntCaption;
var lHeight=4;
var xCrossPos=-1;
var crossSize;
var maxGraphHeight;
//
	rescale();
// main drawing routine
function drawIt(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// background
	var my_gradient=ctx.createLinearGradient(0,0,0,canvasHeight);
	my_gradient.addColorStop(0,"#d4f0ff");
	my_gradient.addColorStop(0.75,"white");
	my_gradient.addColorStop(1,"#c2ebb7");
	ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,canvasWidth,canvasHeight);
	// draw the title
	ctx.font=fntTitle;
	ctx.fillStyle="#000";
	ctx.textAlign="center";
	ctx.fillText(title,centreX,35*scaler);
	if (title2!=""){
		ctx.fillText(title2,centreX,70*scaler);
	}
	// draw the line
	ctx.strokeStyle="#000";
	ctx.lineWidth=lHeight*scaler;
	ctx.lineCap="butt";
	ctx.beginPath();
	ctx.moveTo(leftTextOffset,centreY+topOffset);
	ctx.lineTo(windowW-rightTextOffset,centreY+topOffset);
	ctx.stroke();
	// place captions
	ctx.fontCaption=fntCaption;
	ctx.textAlign="left";
	ctx.fillText(cap,leftTextOffset,centreY+topOffset+50*scaler);
	ctx.textAlign="end";
	ctx.fillText(cap2,windowW-rightTextOffset,centreY+topOffset+50*scaler);
	//
	drawgrid();
	//
	drawSocialGraph();
	//
	drawCross();
}
// dummy array content for testing...
var socialBarGraphArray=new Array(204,102,45,23,12,0,0,21,58,124,267);
function drawSocialGraph(){
	if (xCrossPos!=-1){
		// get highest
		var tBarHeight=0;
		for (h=0;h<socialBarGraphArray.length;h++){
			if (socialBarGraphArray[h]>tBarHeight){
				tBarHeight=socialBarGraphArray[h];
			}
		}
		// draw bars
		ctx.fillStyle="rgba(0,0,255,0.2)";
		for (s=0;s<gridchunks;s++){
			var tempH=(maxGraphHeight*(socialBarGraphArray[s]/tBarHeight));
			var tempY=(centreY+topOffset)-tempH;
			ctx.fillRect(leftTextOffset+gridSizeWidth*s,tempY,gridSizeWidth,tempH);
		}
	}
}
// draw the grid markers on the line
function drawgrid(){
	ctx.strokeStyle="#777";
	ctx.lineWidth=1*scaler;
	// virtical
	for (d=0;d<=gridchunks;d++){
		ctx.beginPath();
		ctx.moveTo(leftTextOffset+gridSizeWidth*d,centreY+topOffset-lHeight*scaler*5);
		ctx.lineTo(leftTextOffset+gridSizeWidth*d,centreY+topOffset+lHeight*scaler*5);
		ctx.stroke();
	}
}
// draw the moderator cross
function drawCross(){
	if (xCrossPos!=-1){
		ctx.lineWidth=8*scaler;
		ctx.strokeStyle="#f00";
		var tempXpos=(leftTextOffset+gridSizeWidth*xCrossPos)+(gridSizeWidth*0.5);
		var tempYpos=centreY+topOffset;
		ctx.beginPath();
		ctx.moveTo(tempXpos-crossSize,tempYpos-crossSize);
		ctx.lineTo(tempXpos+crossSize,tempYpos+crossSize);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(tempXpos-crossSize,tempYpos+crossSize);
		ctx.lineTo(tempXpos+crossSize,tempYpos-crossSize);
		ctx.stroke();
	}
}
//function handleMouseClick(evt) {
function doMouse(mX,mY){
	if (mX>=leftTextOffset && mX<=windowW-rightTextOffset && mY>centreY+topOffset-80*scaler && mY<centreY+topOffset+30*scaler){
		// find the selected 'gridchunk'
		for (f=0;f<gridchunks;f++){
			if (mX>=leftTextOffset+(gridSizeWidth*f) && mX<(leftTextOffset+(gridSizeWidth*f))+gridSizeWidth){
				xCrossPos = f;
			}
		}
		drawIt();
	}
}
//
function rescale() {
	windowW=window.innerWidth;
	windowH=window.innerHeight;
	scalerX=windowW/640;
	scalerY=windowH/480;
	scaler=scalerX;
	if (scalerY<scalerX){
		scaler=scalerY;
	}
	//
	topOffset=100*scaler;
	leftTextOffset=40*scaler;
	rightTextOffset=40*scaler;
	//
	canvasWidth=windowW;
	canvasHeight=windowH;
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	//
	centreX=canvasWidth*0.5;
	centreY=canvasHeight*0.5;
	fntTitle=fontSizeT*scaler+'px Arial';
	fntCaption=fontSizeC*scaler+'px Arial';
	gridSizeWidth = (canvasWidth-(leftTextOffset+rightTextOffset))/gridchunks;
	crossSize=15*scaler;
	maxGraphHeight=200*scaler;
	//
	drawIt();
}
/////////////////////

// always return 1, except at non-default zoom levels in IE before version 8
function GetZoomFactor () {
	var factor = 1;
	if (document.body.getBoundingClientRect) {
		// rect is only in physical pixel size in IE before version 8
		var rect = document.body.getBoundingClientRect ();
		var physicalW = rect.right - rect.left;
		var logicalW = document.body.offsetWidth;
		// the zoom level is always an integer percent value
		factor = Math.round ((physicalW / logicalW) * 100) / 100;
	}
	return factor;
}
function GetScrollPositions () {
	if ('pageXOffset' in window) {  // all browsers, except IE before version 9
		var scrollLeft =  window.pageXOffset;
		var scrollTop = window.pageYOffset;
	}
	else {      // Internet Explorer before version 9
		var zoomFactor = GetZoomFactor ();
		var scrollLeft = Math.round (document.documentElement.scrollLeft / zoomFactor);
		var scrollTop = Math.round (document.documentElement.scrollTop / zoomFactor);
	}
	theScrollLeft=scrollLeft;
	theScrollTop=scrollTop;
}
//////////
// work out the mouse position taking into account the canvas and window positions
function getMousePos(canvas, evt){
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

function getTouchPos(canvas, evt){
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
	var theroot=document.documentElement;
	var mX = evt.touches[0].pageX - left + theroot.scrollLeft;
	var mY = evt.touches[0].pageY - top + theroot.scrollTop;
	return {
		x: mX,
		y: mY
	};
}

function handleMousedown(event) {
	event.preventDefault();
	ev = event || window.event;
	var mousePos = getMousePos(canvas, ev);
	mouseX = mousePos.x;
	mouseY = mousePos.y;
	doMouse(mouseX,mouseY);
}

touchStart = function(event) {
	event.preventDefault();
	var touchPos = getTouchPos(canvas, event);
	mouseX = touchPos.x;
	mouseY = touchPos.y;
	doMouse(mouseX,mouseY);
}
