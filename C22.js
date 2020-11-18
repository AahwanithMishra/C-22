//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball;
var ground
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
var ball_options ={
  restitution : 1
}
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(myWorld, ball);
  console.log(ball);
  var ground_options = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld, ground);
  
 
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  
 
}