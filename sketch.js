
var fixedRect, movingRect,fixedRect1,fixedRect2,fixedRect3;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1000,600);
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 20);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(300, 400, 70, 50);
  fixedRect1.shapeColor = "green";
  
  fixedRect2 = createSprite(600, 500, 70, 30);
  fixedRect2.shapeColor = "green";
}

function draw() {
  background(250,250,250);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if (isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";      
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
 
if (isTouching(movingRect,fixedRect2)){
  fixedRect3 = createSprite(200, 500, 90,60);
  fixedRect3.shapeColor = "yellow";
} 

drawSprites();
}

