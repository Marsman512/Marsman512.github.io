let capture;

function setup() {
    createCanvas(1024, 768);
    capture = createCapture(VIDEO);
    capture.size(1024, 768);
}

function draw() {
    image(capture, 0, 0);
}