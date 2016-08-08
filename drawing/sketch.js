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
  background(255,255,255);
  
}

//function bullseye(x, y, d, nRings, color1, color2, color3){
  //  noStroke();
  //  fill(color1);
  //  circle(x,y,d);
  //  fill(color2);
  //  circle(x, y, (2/3)*d);
  //  fill(color3);
  //  circle(x,y,(1/3)*d);
    
  //  for(var i=0; i<nRings; i++){
  //    circle(x,y,d);
  //    d = d/2; 
  //  }
//}

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
  
  for(var i=0; i<width; i+=100){
    fill(10,0,10);
    circle(i+20, 100, 50);
    fill(0,200,0);
    circle(i+20, 100, 25);
    fill(30,10,60);
    circle(i+20, 100, 13);
  }
  
  //if (mouseIsPressed == true) {
   // noStroke();
   // fill(0, 0, 0);
   // circle(mouseX, mouseY, 100);
 // }
  
  // function mousePressed(){
    //color1=fill(40,40,40);
    //color2=fill(30,30,30);
    //color3=fill(20,20,20);
    //bullseye(200,200,30,3,color1,color2,color3);
  //} 
}