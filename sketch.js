var car,wall;
var car1,wall1;
var car2,wall2;

var speed,weight;
var deformation

function setup() {
 
  createCanvas(1600,400);
  car=createSprite(50, 100, 30, 30);
  car1=createSprite(50,200,30,30);
  car2=createSprite(50,300,30,30);

  speed=random(10,90);
  weight=random(300,100);

  wall=createSprite(1500,100,40,60);
  wall.shapeColor=(80,80,80);
  wall1=createSprite(1500,200,40,60);
  wall1.shapeColor=(80,80,80);
  wall2=createSprite(1500,300,40,60);
  wall2.shapeColor=(80,80,80);

  car.velocityX=speed;
  car1.velocityX=speed;
  car2.velocityX=speed;

  car.weight=weight;
  car1.weight=weight;
  car2.weight=weight;

  deformation=0.5*weight*speed*speed/2250;

}

function draw() {
  background(255,255,255);  
  
 if(wall.x-car.x<car.width/2+wall.width/2 && wall1.x-car1.x<car1.width/2+wall1.width/2 && wall2.x-car2.x<car2.width/2+wall2.width/2){
   car.velocityX=0;
   car1.velocityX=0;
   car2.velocityX=0;

 
if(deformation<100 ){
car1.shapeColor=color(0, 255, 0);
car.shapeColor=color(0, 255, 0);
car2.shapeColor=color(0, 255, 0);
}
if(deformation>100 && deformation<180 ){
  car1.shapeColor=color(230, 230, 0);
  car.shapeColor=color(230, 230, 0);
  car2.shapeColor=color(230, 230, 0);

}
if(deformation>180){
  car.shapeColor=color(255, 0, 0);
  car1.shapeColor=color(255, 0, 0);
  car2.shapeColor=color(255, 0, 0);
}
 }
  drawSprites();
}