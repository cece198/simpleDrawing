var myRed = 200;
var myGreen = 0;
var myBlue = 255;

function circle(x, y, size) {
  ellipse(x, y, size, size);
}

function setup() {
  createCanvas(600,400);
  
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
  circle(mouseX, mouseY, 25);
  myRed = myRed + 0.5;
  myBlue = myBlue - 1;
  
  if(myRed >= 255) {
    myRed = 200;
    myBlue = 255;
  }
}