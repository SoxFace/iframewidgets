data = {
    surveyid: 1,
    server: "http://oufm.open.ac.uk/surveys",
    width: 1024,
    height: 660,
    image: "https://oufm.open.ac.uk/surveys/example1/assets/idea.jpg",
    imagewidth: 1024,
    imageheight:768
};

// script.js
var imageWidth=data.imagewidth;
var imageHeight=data.imageheight;
var imageAspect=imageWidth/imageHeight;
var startX=0;
var startY=0;
var currentX=0;
var currentY=0;
var lastX=0;
var lastY=0;
var touching=0;
var canvas;
var context;
var windowW=window.innerWidth;
var windowH=window.innerHeight;
var container;
var thetimeout;
var theimage;
var scale;
var currentImageWidth;
var currentImageHeight;
var imageTop=0;
var imageLeft=0;
var indicatorXoff=-30;
var indicatorYoff=6;
var myspotsize=10;
var mystrokesize=3;
var myspotoption=2;
var online=0;

var clicked=0;
var serverpolling=0;
var update=1;
var clickedXFract;
var clickedYFract;

var xmlHttpTimeout;
var pollingtimeout;
var xmlHttp = new XMLHttpRequest();
var checkurl=data.server+"/svy.php";
var surveyid=data.surveyid;
var pollfrequency=8000;
var response="";
var datapoints=new Array();
var eachdata=new Array();
var conImages=new Array();
var onFontSize=12;

xmlHttp.onreadystatechange=function(){
   if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      	//success
        console.log(xmlHttp.responseText);
      	clearTimeout(xmlHttpTimeout);
      	response=xmlHttp.responseText;

      	if(clicked!=0){
            pollingtimeout=setTimeout(pollserver, pollfrequency);
        }else{
            serverpolling=0;
        }
        online=1;
   }
}
function ajaxTimeout(){
    //connect timeout
    console.log("fail");
    xmlHttp.abort();
    if(clicked!=0){
        pollingtimeout=setTimeout(pollserver, pollfrequency);
    }else{
        serverpolling=0;
    }
    online=0;

}

var random=Math.floor(Math.random()*10000);
if(random<10){
    random="000"+random;
}else if(random<100){
    random="00"+random;
}else if(random<1000){
    random="0"+random;
}else{
    random=""+random;
}
var d = new Date();
var milli=d.getTime();
var uid=random+milli;
if(localStorage['uid'+surveyid]){
    uid=localStorage['uid'+surveyid];
    clicked=1*localStorage['clicked'+surveyid];
    clickedYFract=1*localStorage['clickedYFract'+surveyid];
    clickedXFract=1*localStorage['clickedXFract'+surveyid];
}else{
    localStorage['uid'+surveyid]=uid;
    localStorage['clicked'+surveyid]=0;
    localStorage['clickedYFract'+surveyid]=0;
    localStorage['clickedXFract'+surveyid]=0;
}


    canvas = document.getElementById("survey");
    container = document.getElementById("canvascontainer");
    context = canvas.getContext("2d");
    loadImage();
    //console.log(uid);
    //console.log(random);

function loadImage(){
    conImages[0]=new Image();
    conImages[0].src="https://oufm.open.ac.uk/surveys/example1/assets/handshakeOpen.png";
    conImages[1]=new Image();
    conImages[1].src="https://oufm.open.ac.uk/surveys/example1/assets/handshakeClosed.png";

    theimage=new Image();
    theimage.src=data.image;
    theimage.onload = function() {
        // use timeouts to redraw page as container.clientWidth can initially include scroll bar etc
        // so having repeated drawing ensures accurate result
        thetimeout=setTimeout(drawFrame, 70);
        //console.log("loaded");
    }
}

function pollserver(){
    var params="uid="+uid+"&sid="+surveyid+"&xfraction="+clickedXFract+"&yfraction="+clickedYFract+"&update="+update;
    //console.log(params);
    if(update==1){
        update=0;
    }

	xmlHttp.open("GET", checkurl+"?"+params, true);
  	xmlHttp.send("");
  	xmlHttpTimeout=setTimeout(ajaxTimeout,5000);
}

function resize(){
    //drawFrame();
}

function drawFrame(){
    if(clicked==1 && serverpolling==0){
        serverpolling=1;
        pollserver();
    }

    windowW=window.innerWidth;
    windowH=window.innerHeight;

    var aspect=container.clientWidth/container.clientHeight;


    if(imageAspect<aspect){
        //fit height
        scale=container.clientHeight/imageHeight;
        currentImageHeight=container.clientHeight;
        imageTop=0;
        currentImageWidth=imageWidth*scale;
        imageLeft=(container.clientWidth-currentImageWidth)/2;
    }else{
        //fit width
        scale=container.clientWidth/imageWidth;
        currentImageHeight=imageHeight*scale;
        imageTop=(container.clientHeight-currentImageHeight)/2;
        currentImageWidth=container.clientWidth;
        imageLeft=0;

    }

    canvas.style.width=container.clientWidth+"px";
    canvas.style.height=container.clientHeight+"px";
    canvas.width=container.clientWidth;
    canvas.height=container.clientHeight;
    //canvas.style.background="#FFFFFF";


    context.drawImage(theimage, imageLeft, imageTop, currentImageWidth, currentImageHeight);


    //turn 'response' string variable into array on "|" and then on ","
    datapoints=response.split("|");
    if(datapoints.length>1){
        for (var i=1; i<datapoints.length; i++){
            eachdata=datapoints[i].split(",");
            context.save();
            context.beginPath();
            context.arc(imageLeft+eachdata[0]*currentImageWidth,imageTop+eachdata[1]*currentImageHeight,8*scale,0,2*Math.PI);
            context.globalAlpha=0.3;
            context.fillStyle="#0000FF";
            context.fill();
            context.globalAlpha=1;
            context.strokeStyle="#000000";
            context.stroke();
            context.restore();
        }
    }


    if(clicked==1){
        //draw my selected point

        context.save();
        if(myspotoption==1){
            context.lineWidth=mystrokesize*scale;
            context.beginPath();
            context.arc(imageLeft+clickedXFract*currentImageWidth,imageTop+clickedYFract*currentImageHeight,myspotsize*scale,0,2*Math.PI);
            context.fillStyle="#000000";
            context.fill();
            context.strokeStyle="#FFAA00";
            context.stroke();
        }else if(myspotoption==2){
            context.lineWidth=mystrokesize*scale;
            context.beginPath();
            context.moveTo(imageLeft+clickedXFract*currentImageWidth-myspotsize*scale,imageTop+clickedYFract*currentImageHeight-myspotsize*scale);
            context.lineTo(imageLeft+clickedXFract*currentImageWidth+myspotsize*scale,imageTop+clickedYFract*currentImageHeight+myspotsize*scale);
            context.stroke();
            context.beginPath();
            context.moveTo(imageLeft+clickedXFract*currentImageWidth-myspotsize*scale,imageTop+clickedYFract*currentImageHeight+myspotsize*scale);
            context.lineTo(imageLeft+clickedXFract*currentImageWidth+myspotsize*scale,imageTop+clickedYFract*currentImageHeight-myspotsize*scale);
            context.stroke();
        }
        context.restore();
    }

    drawOnline();

    thetimeout=setTimeout(drawFrame, 100);

}

function drawOnline(){
    context.font = onFontSize+'px Calibri';
    context.textAlign = 'right';
    context.fillStyle = 'black';
    if(online==1){
        var text = 'online';
        context.drawImage(conImages[1], imageLeft+currentImageWidth+indicatorXoff, imageTop+indicatorYoff, 23, 10);
    }else{
        var text = 'offline';
        context.drawImage(conImages[0], imageLeft+currentImageWidth+indicatorXoff, imageTop+indicatorYoff, 23, 10);

    }
    var metrics = context.measureText(text);
    var width = metrics.width;
    context.fillText(text, imageLeft+currentImageWidth+indicatorXoff-5, imageTop+indicatorYoff+9);
}



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



function touchStart(event){
        event.preventDefault();
        var touchPos = getTouchPos(canvas, event);
        touching=1;
        //relative to the canvas
        startX = touchPos.x;
        startY = touchPos.y;

        //startX = event.touches[0].pageX;
        //startY = event.touches[0].pageY;
        eventStart();
}

function mouseDown(event){
        event.preventDefault();
        ev = event || window.event;
        touching=1;

        var mousePos = getMousePos(canvas, ev);
        //relative to the canvas
        startX = mousePos.x;
        startY = mousePos.y;
        //startX = ev.clientX;
        //startY = ev.clientY;
        eventStart();
}

function touchMove(event){
    event.preventDefault();
    var touchPos = getTouchPos(canvas, event);
	currentX = touchPos.x;
	currentY = touchPos.y;

    //currentX = event.touches[0].pageX;
    //currentY = event.touches[0].pageY;
    eventMove();
}

function mouseMove(event){
    event.preventDefault();
    ev = event || window.event;

	var mousePos = getMousePos(canvas, ev);
	currentX = mousePos.x;
	currentY = mousePos.y;
    //currentX = ev.clientX;
    //currentY = ev.clientY;
    eventMove();
}

function touchEnd(event){
    event.preventDefault();
    eventEnd();
}

function mouseUp(event){
    event.preventDefault();
    eventEnd();
}

function eventStart(){
    //console.log(currentImage);
    if(startX>=imageLeft && startX<=imageLeft+currentImageWidth && startY>=imageTop && startY<=imageTop+currentImageHeight){
        clicked=1;
        clickedXFract=(startX-imageLeft)/currentImageWidth;
        clickedYFract=(startY-imageTop)/currentImageHeight;
        //console.log(clickedXFract+" "+clickedYFract);
    }

}

function eventMove(){
    if(touching==1){
        if(currentX>=imageLeft && currentX<=imageLeft+currentImageWidth && currentY>=imageTop && currentY<=imageTop+currentImageHeight){
            clickedXFract=(currentX-imageLeft)/currentImageWidth;
            clickedYFract=(currentY-imageTop)/currentImageHeight;
        }
    }
}

function eventEnd(){
    if(touching==1){
        clicked=1;
        localStorage['clicked'+surveyid]=clicked;
        localStorage['clickedXFract'+surveyid]=clickedXFract;
        localStorage['clickedYFract'+surveyid]=clickedYFract;
        update=1;
    }

    touching=0;
    startX=currentX;
    startY=currentX;
    lastX=currentX;
    lastY=currentY;
}
