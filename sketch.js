var hr, mn, sc;

var scAngle, mnAngle, hrAngle;

var clock, clockImg;

var bkImg;

function preload(){
  clockImg = loadImage("clock.png");
  bkImg = loadImage("bkimg1.jpg.png");
}
function setup() {
  createCanvas(800,400);
  
  clock = createSprite(590,170);
  clock.addImage(clockImg);
  clock.scale = 0.55;
  
}

function draw() {
  background(bkImg);

  push();
  rotate(25);
  pop();

  drawSprites();  

  //calculating time using predifined functions from p5.js
  hr = hour();
  mn = minute();
  sc = second();

  translate(590,170);
  rotate(-90);

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  //drawing hours hand
  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,85,0);
  pop();

  //drawing minutes hand
  push();
  rotate(mnAngle);  //rotate the hand based on the angle calculated
  stroke(242, 230, 16);
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  //drawing seconds hand
  push();
  rotate(scAngle);  //rotate the hand based on the angle calculated
  stroke("blue");
  strokeWeight(5);
  line(0,0,115,0);
  pop();

  //drawing outline for seconds hand
  push();
  strokeWeight(7);
  noFill();
  stroke("blue");
  arc(0, 0, 320, 320, 0, scAngle);
  pop();

  //drawing outline for minutes hand
  push();
  strokeWeight(7);
  noFill();
  stroke(242, 230, 16);
  arc(0, 0, 304, 304, 0, mnAngle);
  pop();

  //drawing outline for hours hand
  push();
  strokeWeight(7);
  noFill();
  stroke("red");
  arc(0, 0, 288, 288, 0, hrAngle);
  pop();

}