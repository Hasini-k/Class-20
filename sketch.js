var fixedRectangle
var movingRectangle

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 50, 50);
  movingRectangle = createSprite(200, 100, 50, 50);
  

}

function draw() {
  background(255,255,25);  

  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;

  if (abs(movingRectangle.x - fixedRectangle.x) <= fixedRectangle.width/2 + movingRectangle.width/2 && 
  abs(movingRectangle.y - fixedRectangle.y) <= fixedRectangle.height/2 + movingRectangle.height/2) {
fixedRectangle.shapeColor = "red";
movingRectangle.shapeColor = "red";

  }

  else {
    fixedRectangle.shapeColor = "blue";
    movingRectangle.shapeColor = "violet";
  }

  drawSprites();
}