const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ball;
var ground;
function setup() {
  createCanvas(400,400);
  
  myengine=Engine.create();
  myworld=myengine.world;

  var options={
   restitution :100
  }
  ball=Bodies.circle(200,100,20,options);
  World.add(myworld,ball);
  
  console.log(ball);
  var options={
    isStatic:true
  }
   ground=Bodies.rectangle(200,390,400,20,options);
  World.add(myworld,ground)
}

function draw() {
  background("black"); 

  Engine.update(myengine);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}