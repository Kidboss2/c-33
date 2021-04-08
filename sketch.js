const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var lol,lolimg
var snow=[] 

function preload(){
  bg1=loadImage("snow1.jpg");
lolimg=loadImage("lol.png")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,500);
  lol=createSprite(100,400,100,100);
  lol.addImage(lolimg);
  lol.scale=0.1
  
if(frameCount%200=== 0){
 // for(var s =0;s<200;s++){
snow.push(new Snow (random(0,1000),random(0,500),50)) 
//}
}

  
  }

function draw() {
  Engine.update(engine);
  background(bg1)
  for(var s =0;s<200;s++){
  snow[s].display()
  }
  drawSprites();
 
}