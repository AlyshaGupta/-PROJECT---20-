var car, wall;
var speed, weight;

function setup() {
  createCanvas(1400,600);

speed = random(55,90);
weight = random(400,1500);

car = createSprite(50,150,50,50);
car.shapeColor = "white";
car.velocityX = speed;

wall = createSprite(1100,250,80,400)
wall.shapeColor = "white";

}


function draw() {
  background("black");  
  
  isTouching();
  
  drawSprites();
}

function isTouching(){
if(wall.x - car.x < (car.width + wall.width/2)){
  car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed / 22500;


if(deformation < 80){
  car.shapeColor = color(0, 255, 0);
  }

if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230, 230, 0);
  }

if(deformation > 180){
  car.shapeColor = color(255, 0, 0);
  }
 }
}





