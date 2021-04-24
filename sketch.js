const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {
  createCanvas(400,400);
engine=Engine.create()
world=engine.world
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(200,390,200,20,ground_options)
World.add(world,ground)
var ball_options={
  restitution:1.0
}
object=Bodies.rectangle(200,100,50,50,ball_options)
World.add(world,object)
console.log(object)
console.log(object.position.x)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
pos=object.position
ellipseMode(RADIUS)
  ellipse(pos.x, pos.y, 20, 20);
  
}