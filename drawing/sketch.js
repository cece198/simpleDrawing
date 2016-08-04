var r = 0;
var g = 80;
var b = 100;

function circle(x, y, size) {
  ellipse(x, y, size, size);
}

function setup() {
  createCanvas(600,400);
}

function draw() {
  b = b + 1;
  noStroke();
  fill(r, g, b);
  circle(mouseX, mouseY, 25);
}

function mousePressed() {
  clear();
}