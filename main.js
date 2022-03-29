var display = setInterval(colorsDisplay, 500);

function preload() {
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(350, 125);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function colorsDisplay(){
    redRandom = Math.floor(Math.random() * 255) + 100;
    greenRandom = Math.floor(Math.random() * 255) + 100;
    blueRandom = Math.floor(Math.random() * 255) + 100;
    tint(redRandom, greenRandom, blueRandom);
}

function on() {
    display = setInterval(colorsDisplay, 500);
}

function off() {
    clearInterval(display);
}