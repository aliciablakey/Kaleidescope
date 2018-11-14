let angle = 0;
let vx1, vy1, vx2, vy2, vx3, vy3, vx4, vy4;
v1 = {}

let oRingLED = [];


let rW = 255;
let gW = 255;
let bW = 255;
let rB = 0;
let gB = 0;
let bB = 0;
rgbW = [rW, gW, bW];
rgbB = [rB, gB, bB];


r = RedSlider;
g = BlueSlider;
b = GreenSlider;
rgb = [r, g, b];

var outerRingLength = 40;
var middleRingLength = 16;
var innerRingLength = 8;

//placeholder for audio in
let voiceColor = rgbB;

class Rings {

    constructor(drawAudio) {
        this.identity = i;
        this.x;
        this.y;
        this.strokeWeight = 4;
        this.strokeColor = 51;

        this.fill = [100, 0, 100, drawAudio];

        this.radius = 20;
    }

    showOuter(drawAudio){
        for(var i = 0; i <= outerRingLength; i++) {
            push();
            var x = width / 2 + cos(angle) * 350;
            var y = height / 2 + sin(angle) * 350;
            var d = 1.5 * this.radius;
            var angle = TWO_PI / outerRingLength * i;
            fill(r, g, b, drawAudio);
            ellipse(x, y, d, d);
            pop();

        }
    }

    showMiddle(drawAudio){
        for(var i = 0; i <= middleRingLength; i++) {
            push();
            var x = width / 2 + cos(angle) * 250;
            var y = height / 2 + sin(angle) * 250;
            var d = 3 * this.radius;
            var angle = TWO_PI / middleRingLength * i;
            fill(r, g, b, drawAudio);
            ellipse(x, y, d, d);
            pop();

        }
    }
    showInner(drawAudio){
        for(var i = 0; i <= innerRingLength; i++) {

            push();
            var x = width / 2 + cos(angle) * 100;
            var y = height / 2 + sin(angle) * 100;
            var d = 3 * this.radius;
            var angle = TWO_PI / innerRingLength * i;
            fill(r, g, b, drawAudio);
            ellipse(x, y, d, d);
            pop();

        }
    }

    showFrame() {

        rectMode(CENTER);
        strokeWeight(5);
        fill(51);

        ellipse(windowWidth / 2, windowHeight / 2, windowHeight - 230, windowHeight - 230);
        point(windowWidth / 2, windowHeight / 2);

    }

    move() {
        for(var i = 0; i <= outerRingLength; i++) {

        }
    }
    move1() {
        for(var i = 0; i <= outerRingLength; i++) {
            this.r = 0 + i;
            this.g = 100 + i;
            this.b = 0 + i;
            this.fill = [this.r, this.g, this.b];
            push();
            var x = width / 2 + cos(angle) * 350;
            var y = height / 2 + sin(angle) * 350;
            var d = 1.5 * this.radius;
            var angle = TWO_PI / outerRingLength * i;
            fill(this.fill);
            ellipse(x, y, d, d);
            pop();
        }
    }

    hueShift(){
        for(var i = 0; i <= outerRingLength; i++) {
            this.r = 0 + i;
            this.g = 0 + i;
            this.b = 0 + i;
            this.fill = r, g, b;
        }

    }
    randomMode(){
      console.log("random mode is on!")
    }

}


