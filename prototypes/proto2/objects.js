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
        this.r;
        this.g;
        this.b;
        this.radius = 20;
    }

    showOuter(drawAudio){
        for(var i = 0; i <= outerRingLength; i++) {
            push();
            var x = width / 2 + cos(angle) * 350;
            var y = height / 2 + sin(angle) * 350;
            var d = 1.5 * this.radius;
            var angle = TWO_PI / outerRingLength * i;
            fill(this.fill, drawAudio);
            ellipse(x, y, d, d);
            pop();

        }
    }

    showMiddle(drawAudio){
        for(var i = 0; i <= outerRingLength; i++) {
            push();
            var x = width / 2 + cos(angle) * 250;
            var y = height / 2 + sin(angle) * 250;
            var d = 3 * this.radius;
            var angle = TWO_PI / middleRingLength * i;
            fill(255, 100, 0, drawAudio);
            ellipse(x, y, d, d);
            pop();

        }
    }
    showInner(drawAudio){
        for(var i = 0; i <= outerRingLength; i++) {

            push();
            var x = width / 2 + cos(angle) * 100;
            var y = height / 2 + sin(angle) * 100;
            var d = 3 * this.radius;
            var angle = TWO_PI / innerRingLength * i;
            fill(255, 100, 0,  drawAudio);
            ellipse(x, y, d, d);
            pop();

        }
    }

    showFrame() {

        rectMode(CENTER);
        strokeWeight(5);
        fill(51);

        ellipse(windowWidth / 2, windowHeight / 2, windowHeight - 300, windowHeight - 300);
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
}
class CenterVertex {

    constructor() {
        this.cX = windowWidth / 2;
        this.cY = windowHeight / 2;
        this.strokeWeight = 4;
        this.strokeColor = 51;
    }


    show() {
        point(this.cX, this.cY)
    }
}

class AudioBar {

    constructor() {
        rectMode(CENTER);
        this.x = windowWidth - 50;
        this.y = windowHeight / 2;
        this.w = 80;
        this.h = windowHeight - 10;
    }


    show() {

        rectMode(CENTER);
        strokeWeight(5);
        fill(255, 255, 255);

        rect(this.x, this.y, this.w, this.h);


    }

    dB(audioIn){
        map(audioIn, 0, 1, 0, 255);
        rectMode(CENTER);
        strokeWeight(5);
        fill(audioIn);

        rect(this.x, this.y, this.w, this.h);

    }

}


