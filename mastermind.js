var data = {
	title: "General Knowledge Quiz One",
	cookie: "q01",
    questions: [
    {   num: 1,
        result: 1,
        question: 'Christopher Cockerill invented what in 1955?',
        options: [
        { answer: 'Jet Engine'},
        { answer: 'Hovercraft'},
        { answer: 'Coffee Maker'},
        { answer: 'Electric Car'}
      ]
    },
    {   num: 2,
        result: 2,
        question: 'What is the capital city of Australia?',
        options: [
        { answer: 'Melbourne'},
        { answer: 'Sydney'},
        { answer: 'Canberra'},
        { answer: 'Perth'}
      ]
    },
    {   num: 3,
        result: 2,
        question: 'Who is the only British Prime Minister to be assassinated?',
        options: [
        { answer: 'Winston Churchill'},
        { answer: 'William Gladstone'},
        { answer: 'Spencer Percival'},
        { answer: 'Sir Robert Peel'}
      ]
    },
    {   num: 4,
        result: 3,
        question: 'What colour is the the Northern Line on the London underground?',
        options: [
        { answer: 'Red'},
        { answer: 'Green'},
        { answer: 'Blue'},
        { answer: 'Black'}
      ]
    },
    {   num: 5,
        result: 0,
        question: 'The Patella is commonly known as what?',
        options: [
        { answer: 'Kneecap'},
        { answer: 'Elbow'},
        { answer: 'Shoulder Blade'},
        { answer: 'Shin'}
      ]
    },
    {   num: 6,
        result: 1,
        question: 'Which organ secretes insulin?',
        options: [
        { answer: 'Liver'},
        { answer: 'Pancreas'},
        { answer: 'Gall Bladder'},
        { answer: 'Kidneys'}
      ]
    },
    {   num: 7,
        result: 0,
        question: 'Who was the first actor to refuse an oscar?',
        options: [
        { answer: 'George C. Scott'},
        { answer: 'Ronald Regan'},
        { answer: 'Olivia de Havilland'},
        { answer: 'Betty Grable'}
      ]
    },
    {   num: 8,
        result: 0,
        question: 'Who composed Peer Gynt?',
        options: [
        { answer: 'Edward Grieg'},
        { answer: 'Beethoven'},
        { answer: 'Mozart'},
        { answer: 'Franz Liszt'}
       ]
    },
    {   num: 9,
        result: 2,
        question: 'How many episodes of Fawlty Towers were made?',
        options: [
        { answer: '10'},
        { answer: '11'},
        { answer: '12'},
        { answer: '13'}
      ]
    },
    {   num: 10,
        result: 2,
        question: 'What is the model name of this famous guitar?',
        img: './images/guitar.jpg',
        imgwidth: 500,
        imgheight: 175,
        options: [
        { answer: 'SG'},
        { answer: 'Stratocaster'},
        { answer: 'Les Paul'},
        { answer: 'Explorer'}
      ]
    },
    {   num: 11,
        result: 3,
        question: 'How high is a basketball hoop?',
        options: [
        { answer: '8.75 feet'},
        { answer: '9 feet'},
        { answer: '9.5 feet'},
        { answer: '10 feet'}
      ]
    },
    {   num: 12,
        result: 0,
        question: 'Which two countries signed up to the common market in 1973 alongside the U.K?',
        options: [
        { answer: 'Eire & Denmark'},
        { answer: 'Eire & Belgium'},
        { answer: 'Belgium & Denmark'},
        { answer: 'Spain & Portugal'}
      ]
    },
    {   num: 13,
        result: 1,
        question: 'How many years did Nelson Mandela spend in prison?',
        options: [
        { answer: '25'},
        { answer: '27'},
        { answer: '29'},
        { answer: '30'}
      ]
    },
    {   num: 14,
        result: 2,
        question: 'What is the largest bone in the human body?',
        options: [
        { answer: 'Scapula'},
        { answer: 'Ulna'},
        { answer: 'Femur'},
        { answer: 'Humerus'}
      ]
    },
    {   num: 15,
        result: 0,
        question: 'Which popular KMi web applet is being used here?',
        img: "./images/fm.jpg",
        imgwidth: 784,
        imgheight: 600,
        options: [
        { answer: 'flashMeeting'},
        { answer: 'Hexagon'},
        { answer: 'Stadium'},
        { answer: 'VDC'}
      ]
    },
    {   num: 16,
        result: 3,
        question: 'What is Agoraphobia the fear of?',
        options: [
        { answer: 'Heights'},
        { answer: 'Enclosed Spaces'},
        { answer: 'Spiders'},
        { answer: 'Open Spaces'}
      ]
    },
    {   num: 17,
        result: 1,
        question: 'On what date is U.S Independence day?',
        options: [
        { answer: 'July 5th'},
        { answer: 'July 4th'},
        { answer: 'July 6th'},
        { answer: 'July 8th'}
      ]
    },
    {   num: 18,
        result: 2,
        question: 'What is the collective noun for a group of Rhino?',
        options: [
        { answer: 'List'},
        { answer: 'Gang'},
        { answer: 'Crash'},
        { answer: 'Band'}
      ]
    },
    {   num: 19,
        result: 3,
        question: 'Who painted the Laughing Cavalier?',
        options: [
        { answer: 'David Hockney'},
        { answer: 'William Turner'},
        { answer: 'John Constable'},
        { answer: 'Franz Hals'}
      ]
    },
    {   num: 20,
        result: 1,
        question: 'Which country has the longest coastline?',
        options: [
        { answer: 'North America'},
        { answer: 'Canada'},
        { answer: 'Australia'},
        { answer: 'China'}
      ]
    }
  ]
};

var theWidth=640;
var theHeight=480;

var windowW=window.innerWidth;
var windowH=window.innerHeight;
var scalerX=windowW/theWidth;
var scalerY=windowH/theHeight;
var scaler=scalerX;
if (scalerY<scalerX){
	scaler=scalerY;
}
var canvas;
var ctx;

var title= "";
// background colours
var innerColour="#006";
var outerColour="#000";
// plinth border colours
var surroundColour="#00c5ff";
//
var imageX;
var imageY;
var imageW;
var imageH;
var actualW;
var actualH;
var imageHasLoaded=0;

var showTheScoreScreen=0;

var answerXArray=new Array();
var answerYArray=new Array();

var hasAnsweredArray=new Array();
var scoreArray=new Array();

var questionFontSize=22;
var questionCount=0;
var showStart=1;

var fontSizeT=24;
var fontSizeA=18;
var fcount=0;
var tempResult=0;

var titlePercent=0.75;
var titlewidth=0;
var centreX;
var centreY;
var fnt;
var fnt1;
var fnts;
var padding=10*scaler;
var whichClickedOn=-1;
var mouseYcheck=windowH-120*scaler;
var mouseYcheck2=windowH-50*scaler;

var mouseX;
var mouseY;
var candomouse=1;
var bigImage=0;
//
var finalTimer;
/////
	// initialise answer array
	for (c=0;c<data.questions.length;c++){
		hasAnsweredArray.push(-1);
		scoreArray.push(0)
	}
	resize();
// load image
var imageObj = new Image();
imageObj.onload = function() {
	imageHasLoaded=1;
	drawit();
};
// display an image if required - either full screen or in position
function showImage(){
	if (bigImage==0){
		imageH=(windowH-(windowH*0.4)-imageY)-(20*scaler);
		imageW=actualW*(imageH/actualH);
		imageX=(windowW-imageW)*0.5;
	} else if (bigImage==1){
		ctx.fillStyle="rgba(0,0,0,0.5)";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		// fit to width
		imageW=windowW;
		imageH=actualH*(imageW/actualW);
		imageX=0;
		imageY=(windowH-imageH)*0.5;
		// if too high - fit to height
		if (imageH>windowH){
			imageH=windowH;
			imageW=actualW*(imageH/actualH);
			imageX=(windowW-imageW)*0.5;
			imageY=0;
		}
	}
	ctx.drawImage(imageObj,imageX,imageY,imageW,imageH);
}
//
function drawRule(nm){
	ctx.strokeStyle=ruleColour;
	ctx.beginPath();
	ctx.moveTo(windowW*0.125+answerwidths*nm,150*scaler);
	ctx.lineTo(windowW*0.125+answerwidths*nm,windowH-50*scaler);
	ctx.stroke();
}
// draw the start screen
function drawStart(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// background
	var grd=ctx.createRadialGradient(windowW*0.5,windowH*0.5,windowH*0.25,windowW*0.5,windowH*0.5,windowW*0.5);
	grd.addColorStop(0,innerColour);
	grd.addColorStop(1,outerColour);
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	// draw the title
	drawthetitle(data.title);
	// draw button
	ctx.lineWidth=5*scaler;
	roundRect(ctx, centreX-50*scaler,windowH-100*scaler,100*scaler,50*scaler, 10*scaler, "#f55", surroundColour);
	//ctx.font=fnts;
	ctx.fillStyle="#fff";
	ctx.textAlign="center";
	ctx.fillText("begin",centreX,windowH-70*scaler);
}

function drawit(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// background
	var grd=ctx.createRadialGradient(windowW*0.5,windowH*0.5,windowH*0.25,windowW*0.5,windowH*0.5,windowW*0.5);
	grd.addColorStop(0,innerColour);
	grd.addColorStop(1,outerColour);
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	// draw the title
	drawthetitle(data.questions[questionCount].question);
	// draw the footer
	drawFooter();
	// draw the answers surrounds
	if (hasAnsweredArray[questionCount]==-1){
		// question not answered yet
		drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour);// top left
		drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour);// top right
		drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour);// bottom left
		drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour);// bottom right
	} else {
		// question answered so colour up
		// top left answer chosen
		if (hasAnsweredArray[questionCount]==0){
			// correct?
			if (data.questions[questionCount].result==0){
				// has answered correctly
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top left
				// draw others
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
			} else {
				// has answered incorrectly
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"r");// top left
				// show correct answer in green
				if (data.questions[questionCount].result==1){
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top right
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
				} else if (data.questions[questionCount].result==2){
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
				} else if (data.questions[questionCount].result==3){
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom right
				}
			}
		}
		// top right answer chosen
		if (hasAnsweredArray[questionCount]==1){
			// correct?
			if (data.questions[questionCount].result==1){
				// has answered correctly
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top right
				// draw others
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
			} else {
				// has answered incorrectly
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"r");// top right
				// show correct answer in green
				if (data.questions[questionCount].result==0){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top left
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
				} else if (data.questions[questionCount].result==2){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
				} else if (data.questions[questionCount].result==3){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom right
				}
			}
		}
		// bot left answer chosen
		if (hasAnsweredArray[questionCount]==2){
			// correct?
			if (data.questions[questionCount].result==2){
				// has answered correctly
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom left
				// draw others
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
			} else {
				// has answered incorrectly
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"r");// bottom left
				// show correct answer in green
				if (data.questions[questionCount].result==0){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
				} else if (data.questions[questionCount].result==1){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top right
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom right
				} else if (data.questions[questionCount].result==3){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom right
				}
			}
		}
		// bot right answer chosen
		if (hasAnsweredArray[questionCount]==3){
			// correct?
			if (data.questions[questionCount].result==3){
				// has answered correctly
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom right
				// draw others
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
				drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
			} else {
				// has answered incorrectly
				drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"r");// bottom right
				// show correct answer in green
				if (data.questions[questionCount].result==0){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
				} else if (data.questions[questionCount].result==1){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// top right
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// bottom left
				} else if (data.questions[questionCount].result==2){
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top left
					drawSurround((windowW*0.5)+(10*scaler),windowH-(windowH*0.4),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"n");// top right
					drawSurround((windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.25),windowW*0.35,windowH*0.1,3*scaler,surroundColour,"g");// bottom left
				}
			}
		}
	}
	// draw the answer text
	ctx.font=fnts;
	ctx.textAlign="left";
	//
	ctx.fillStyle="#f55";
	ctx.fillText("A:",10*scaler+(windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.34));
	ctx.fillStyle="#fff";
	checkFontSize(data.questions[questionCount].options[0].answer,windowW*0.35);
	ctx.fillText(data.questions[questionCount].options[0].answer,40*scaler+(windowW*0.5)-((windowW*0.35)+(70*scaler)),windowH-(windowH*0.34));
	//
	ctx.font=fnts;
	ctx.fillStyle="#f55";
	ctx.fillText("B:",10*scaler+(windowW*0.5)+(10*scaler),windowH-(windowH*0.34));
	ctx.fillStyle="#fff";
	checkFontSize(data.questions[questionCount].options[1].answer,windowW*0.35);
	ctx.fillText(data.questions[questionCount].options[1].answer,40*scaler+(windowW*0.5),windowH-(windowH*0.34));
	//
	ctx.font=fnts;
	ctx.fillStyle="#f55";
	ctx.fillText("C:",10*scaler+(windowW*0.5)-((windowW*0.35)+(60*scaler)),windowH-(windowH*0.19));
	ctx.fillStyle="#fff";
	checkFontSize(data.questions[questionCount].options[2].answer,windowW*0.35);
	ctx.fillText(data.questions[questionCount].options[2].answer,40*scaler+(windowW*0.5)-((windowW*0.35)+(70*scaler)),windowH-(windowH*0.19));
	//
	ctx.font=fnts;
	ctx.fillStyle="#f55";
	ctx.fillText("D:",10*scaler+(windowW*0.5)+(10*scaler),windowH-(windowH*0.19));
	ctx.fillStyle="#fff";
	checkFontSize(data.questions[questionCount].options[3].answer,windowW*0.35);
	ctx.fillText(data.questions[questionCount].options[3].answer,40*scaler+(windowW*0.5),windowH-(windowH*0.19));

	if(imageHasLoaded==1){
		showImage();
	}
}
// draw the title
function drawthetitle(sentTitle){
	ctx.font=fnt;
	ctx.fillStyle="#fff";
	ctx.textAlign="center";
	title=sentTitle;
	titlewidth=ctx.measureText(title).width;
	if (titlewidth<windowW*titlePercent){
		// one line
		ctx.fillText(title,centreX,60*scaler);
		drawSurround((windowW*0.5)-((windowW*0.8)+(windowH*0.1))*0.5,25*scaler,windowW*0.8,60*scaler,3*scaler,surroundColour);
		imageY=(25*scaler)+(60*scaler)+(20*scaler);
	} else {
		var tempTitleArray=new Array();
		var tempTitleString="";
		var line1="";
		var line2="";
		var line3="";
		tempTitleArray=title.split(" ");
		if (titlewidth>(windowW*titlePercent)*2){
			// three lines
			for (t=0;t<tempTitleArray.length;t++){
				tempTitleString+=tempTitleArray[t]+" ";
				if (ctx.measureText(tempTitleString).width<windowW*titlePercent){
					line1+=tempTitleArray[t]+" ";
				} else if (ctx.measureText(tempTitleString).width<(windowW*titlePercent)*2){
					line2+=tempTitleArray[t]+" ";
				} else {
					line3+=tempTitleArray[t]+" ";
				}
			}
			ctx.fillText(line1,centreX,50*scaler);
			ctx.fillText(line2,centreX,80*scaler);
			ctx.fillText(line3,centreX,110*scaler);
			drawSurround((windowW*0.5)-((windowW*0.8)+(windowH*0.2))*0.5,25*scaler,windowW*0.8,100*scaler,3*scaler,surroundColour);
			imageY=(25*scaler)+(100*scaler)+(20*scaler);
		} else {
			// two lines
			for (t=0;t<tempTitleArray.length;t++){
				tempTitleString+=tempTitleArray[t]+" ";
				if (ctx.measureText(tempTitleString).width<windowW*titlePercent){
					line1+=tempTitleArray[t]+" ";
				} else {
					line2+=tempTitleArray[t]+" ";
				}
			}
			ctx.fillText(line1,centreX,55*scaler);
			ctx.fillText(line2,centreX,85*scaler);
			drawSurround((windowW*0.5)-((windowW*0.8)+(windowH*0.15))*0.5,25*scaler,windowW*0.8,75*scaler,3*scaler,surroundColour);
			imageY=(25*scaler)+(75*scaler)+(20*scaler);
		}
	}
}
//
function drawFooter(){
	// draw arrow circle
	if (candomouse==1){
		ctx.strokeStyle="rgba(255,255,255,0.1)";
	} else {
		ctx.strokeStyle="rgba(255,255,255,0.4)";
	}
	ctx.lineWidth=4*scaler;
	ctx.beginPath();
	// draw left hand semicircle
	ctx.arc(windowW*0.5,windowH-(30*scaler),20*scaler,0*Math.PI,2*Math.PI,true);
	ctx.stroke();
	// draw arrow
	ctx.fillStyle="#fff";
	ctx.lineWidth=3*scaler;
	ctx.beginPath();
	ctx.moveTo((windowW*0.5)-(14*scaler),windowH-(50*scaler));
	ctx.lineTo((windowW*0.5)+(24*scaler),windowH-(30*scaler));
	ctx.lineTo((windowW*0.5)-(14*scaler),windowH-(10*scaler));
	ctx.closePath();
	ctx.fill();
	// dots
	var dlength=data.questions.length;
	var dhalfLeft=Math.floor(dlength/2);
	var dhalfRight=dlength-dhalfLeft;
	var maxLeft=((windowW*0.5)-(30*scaler))-(dhalfLeft*(15*scaler));
	for (d=0;d<dlength;d++){
		if (d==questionCount){
			ctx.fillStyle="#f55";
		} else {
			ctx.fillStyle="#fff";
		}
		if (d<dhalfLeft){
			ctx.beginPath();
			ctx.arc(maxLeft+d*(15*scaler),windowH-(30*scaler),4*scaler,0,2*Math.PI);
			ctx.fill();
		} else {
			ctx.beginPath();
			ctx.arc(((windowW*0.5)+((d-dhalfLeft)*(15*scaler)))+(45*scaler),windowH-(30*scaler),4*scaler,0,2*Math.PI);
			ctx.fill();
		}
	}
}
// draw the button surround strokes
function drawSurround(x,y,w,h,t,c,f){
	ctx.strokeStyle=c;
	ctx.lineWidth=t;
	ctx.beginPath();
	// draw left hand semicircle
	ctx.arc(x+h*0.5,y+h*0.5,h*0.5,0.5*Math.PI,1.5*Math.PI,false); // left hand arc
	ctx.lineTo(1+x+w+h*0.5,y); // top line
	ctx.arc(x+w+h*0.5,y+h*0.5,h*0.5,1.5*Math.PI,0.5*Math.PI,false); // right hand arc
	ctx.lineTo(x-1+h*0.5,y+h); // bottom line
	if (f=="r"){
		ctx.fillStyle="#900";
		ctx.fill();
	} else if (f=="g"){
		ctx.fillStyle="#080";
		ctx.strokeStyle="#fff";
		ctx.fill();
	}
	ctx.stroke();
}

// draw final screen
function drawFinal(){
	if (fcount<fontSizeT*2){
		fcount++;
	} else {
	 	clearInterval(finalTimer);
	}
	ctx.clearRect(0,0,canvas.width,canvas.height);
	// background
	var grd=ctx.createRadialGradient(windowW*0.5,windowH*0.5,windowH*0.25,windowW*0.5,windowH*0.5,windowW*0.5);
	grd.addColorStop(0,innerColour);
	grd.addColorStop(1,outerColour);
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	// draw title
	ctx.font=fnt;
	ctx.fillStyle="#fff";
	ctx.textAlign="center";
	// one line
	ctx.fillText("Your Score",centreX,60*scaler);
	drawSurround((windowW*0.5)-((windowW*0.8)+(windowH*0.1))*0.5,25*scaler,windowW*0.8,60*scaler,3*scaler,surroundColour);
	ctx.font=fcount*scaler+'px Arial';
	ctx.fillText(tempResult+" / "+scoreArray.length,centreX,centreY);
}
// if needed reduce font size to fit a width
function checkFontSize(txt,widest){
	// set for default font size
	var tempFontSize = fontSizeA;
	fnt1=Math.round(fontSizeA)*scaler+'px Arial';
	ctx.font=fnt1;
	// loop through from max to min
	for (t=tempFontSize;t>0;t--){
		if (ctx.measureText(txt).width<widest){
			break;
		}else{
			fnt1=Math.round(t)*scaler+'px Arial';
			ctx.font=fnt1;
		}
	}
}
// draw a round-cornered rectangle
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
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
  	ctx.fillStyle=fill;
    ctx.fill();
  }
}

/////////////////////

function doMouse(mx,my){
	// clicked on the arrow?
	if (showStart==1){
		if (mx>centreX-50*scaler && mx<(centreX-50*scaler)+100*scaler && my>windowH-100*scaler && my<(windowH-100*scaler)+50*scaler){
			showStart=0;
			drawit();
		}
	} else {
		// clicked on next arrow?
		if (mx>(windowW*0.5)-(10*scaler) && mx<(windowW*0.5)+(20*scaler) && my>windowH-(50*scaler) && my<windowH-(10*scaler)){
			if (candomouse==0){
				if (questionCount<data.questions.length-1){
					// next question
					imageHasLoaded=0;
					questionCount++;
					candomouse=1;
					// is there an image?
					if(data.questions[questionCount].img){
						actualW=data.questions[questionCount].imgwidth;
						actualH=data.questions[questionCount].imgheight;
						imageObj.src = data.questions[questionCount].img;
					} else {
						drawit();
					}
				} else if (showTheScoreScreen==0){
					showTheScoreScreen=1;
					// end... so score
					fcount=0;
					// results
					for (r=0;r<scoreArray.length;r++){
						if (scoreArray[r]==1){
							tempResult++;
						}
					}
					finalTimer = setInterval(function(){drawFinal()},50);
				}
			}
		} else {
			// clicked on an answer?
			// top left
			if (candomouse==1){
				if (mx>(windowW*0.5)-((windowW*0.35)+(60*scaler)) && mx<(windowW*0.5)-((windowW*0.35)+(60*scaler))+windowW*0.4 && my>windowH-(windowH*0.4) && my<windowH-(windowH*0.4)+windowH*0.1){
					hasAnsweredArray[questionCount]=0;
				// top right
				} else if (mx>(windowW*0.5)+(10*scaler) && mx<(windowW*0.5)+(50*scaler)+windowW*0.35 && my>windowH-(windowH*0.4) && my<windowH-(windowH*0.4)+windowH*0.1){
					hasAnsweredArray[questionCount]=1;
				// bottom left
				} else if (mx>(windowW*0.5)-((windowW*0.35)+(60*scaler)) && mx<(windowW*0.5)-((windowW*0.35)+(60*scaler))+windowW*0.4 && my>windowH-(windowH*0.25) && my<windowH-(windowH*0.25)+windowH*0.1){
					hasAnsweredArray[questionCount]=2;
				// bottom right
				} else if (mx>(windowW*0.5)+(10*scaler) && mx<(windowW*0.5)+(50*scaler)+windowW*0.35 && my>windowH-(windowH*0.25) && my<windowH-(windowH*0.25)+windowH*0.1){
					hasAnsweredArray[questionCount]=3;
				}
				// if answer choice made show result
				if (hasAnsweredArray[questionCount]!=-1){
					if (data.questions[questionCount].result==hasAnsweredArray[questionCount]){
						scoreArray[questionCount]=1;
					}
					candomouse=0;
					drawit();
				};
			}
		}
		// clicked on the image?
		if(imageHasLoaded==1){
			if (bigImage==0 && mx>imageX && mx<imageX+imageW && my>imageY && my<imageY+imageH){
				// make image bigger
				bigImage=1;
				drawit();
			} else if (bigImage==1){
				bigImage=0;
				drawit();
			}
		}
	}
}

/////////////////////

function getScrollingPosition(){
	var position = [0, 0];
	if (typeof window.pageYOffset != 'undefined'){
		position = [
			window.pageXOffset,
			window.pageYOffset
		];
	} else if (typeof document.documentElement.scrollTop!= 'undefined' && document.documentElement.scrollTop > 0){
		position = [
			document.documentElement.scrollLeft,
			document.documentElement.scrollTop
		];
	} else if (typeof document.body.scrollTop != 'undefined'){
		position = [
			document.body.scrollLeft,
			document.body.scrollTop
		];
	}
	return position;
}

//////

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
//
function resize() {
	windowW=window.innerWidth;
	windowH=window.innerHeight;
	scalerX=windowW/theWidth;
	scalerY=windowH/theHeight;
	if (scalerY>scalerX){
		scaler=scalerY;
	}
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	canvas.width = windowW;
	canvas.height = windowH;
	centreX=canvas.width*0.5;
	centreY=canvas.height*0.5;
	ctx.lineWidth=1*scaler;
	fnt=fontSizeT*scaler+'px Arial';
	fnts=fontSizeA*scaler+'px Arial';
	// work out answer dimensions
	padding=10*scaler;
	mouseYcheck=windowH-120*scaler;
	mouseYcheck2=windowH-50*scaler;
	//
	if (showStart==1){
		drawStart();
	} else if (showTheScoreScreen==1){
		drawFinal();
	} else {
		drawit();
	}
}
