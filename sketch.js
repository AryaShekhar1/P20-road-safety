var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;

  
  wall=createSprite(1500,200,60,height/2)
}

function draw() {
  
  background("black");  
  
  if(car.x-wall.x< car.width/2+wall.width/2 && 
    wall.x-car.x< car.width/2+wall.width/2 &&
    car.y-wall.y< car.height/2+wall.height/2 &&
    wall.y-car.y< car.height/2+wall.height/2){
          console.log("istouching");
      car.velocityX=0;
      deformation=0.5*weight*speed*speed/22500;

    if(deformation>180){
        car.shapeColor="red";
    }

    if(deformation<180 && deformation>100){
        car.shapeColor="yellow";
      }

      if(deformation<100){
          car.shapeColor="green";
        }

  }
  
  drawSprites();
}