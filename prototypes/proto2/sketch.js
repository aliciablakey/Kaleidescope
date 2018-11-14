var serial;       //variable to hold the serial port object
var ardSend = {}; //uses {} to define it as a JSON variable
var serialPortName = "COM3";      //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                                    //Look at P5 Serial to see the available ports
var sendRate = 1000;               //use this with setInterval to stablize the data sending to arduino

// gui params
var slider1 = 20;
var strokeWidth = 4;
var strokeColor = [51, 0, 0];
var fillColor = [51, 100, 255];
var AudioReactive = true;
var	RandomMode = true;
var radius = 20;
var scheme = ['one', 'two', 'three'];
var userInput = 'userInput';

// gui
var visible = true;
var gui, gui2;

// dynamic parameters
var slider2;

// variables for Classes
let midPoint;
let rings;

//array specific
var outerRingLength;
var middleRingLength;
var innerRingLength;

//audio
var audioBar;
let mic;
var audioIn;
var drawAudio;

i = 0;

function setup() {
	setInterval(initSerial(), 1000);

	createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn();
	mic.start();

  // Calculate big radius
  slider2 = height / 3.0;

  // Create Layout GUI
  gui = createGui('KaleidoScope');
  gui.addGlobals('slider1', 'slider2', 'scheme', 'userInput', 'radius',
  'RandomMode', 'fillColor', 'AudioReactive', 'strokeColor', 'strokeWidth');

  // Don't loop automatically



}


function draw() {
	setInterval(showData(), 1000);
	setInterval(sendData(), 1000);
	outerRingLength = 60;
	middleRingLength = 24;
	innerRingLength = 10;

	let	outerRingLed = [];	let	middleRingLed = []; let	innerRingLed = [];

	let outerLed;	let middleLed;	let innerLed;

  // clear all


	//framing
	background(100);

	//audio

	var drawAudio = map(audioIn, 0, 1, 0, 1000);
	fill(drawAudio, drawAudio, drawAudio)
	ellipse(windowWidth/2, windowHeight/2, 100, 100);

	// OOP functions
	oRingLED[i] = new Rings();
	oRingLED[i].showFrame();
	oRingLED[i].showOuter();
	oRingLED[i].showMiddle(drawAudio);
	oRingLED[i].showInner(drawAudio);



	// set fill style
	if(RandomMode) {
		// for(var i = 0; i <= 100; i++) {
			// randomColor = [random(0, 255), random(0, 255), random(0, 255)]
    //}
		} else {

		}

		//turn on audio input
	if(AudioReactive) {
 audioIn = mic.getLevel();
	} else {
 audioIn = .1;
	}

	var nSides = 8;

  //   // pick a scheme


}


// check for keyboard events
function keyPressed() {
  switch(key) {
    // type [F1] to hide / show the GUI
    case 'p':
      visible = !visible;
      if(visible) gui.show(); else gui.hide();
      break;
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);

}

