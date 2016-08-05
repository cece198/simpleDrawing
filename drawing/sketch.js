var myRed = 200;
var myGreen = 0;
var myBlue = 255;
//draw a circle
function circle(x, y, size) {
  ellipse(x, y, size, size);
}
//set up the background
function setup() {
  createCanvas(600,400);
  background(0, 0, 0);
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
  if (mouseIsPressed == true) {
    noStroke();
    fill(0, 0, 0);
    circle(mouseX, mouseY, 100);
  }
}