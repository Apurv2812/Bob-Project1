const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var constraintBob1,constraintBob2,constraintBob3,constraintBob4,constraintBob5;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	constraintBob1 = new Bob(1020,600,80,80);
	constraintBob2 = new Bob(860,600,80,80);
	constraintBob3 = new Bob(700,600,80,80)
	constraintBob4 = new Bob(540,600,80,80);
	constraintBob5 = new Bob(380,600,80,80);
	
	roof = new Roof(700,100,1000,50);

	constraintBobDiameter = 50;

	rope1 = new Rope(constraintBob1.body , roof.body , -constraintBobDiameter*2 , 0);
	rope2 = new Rope(constraintBob2.body , roof.body , -constraintBobDiameter*2 , 0);
	rope3 = new Rope(constraintBob3.body , roof.body , -constraintBobDiameter*2 , 0);
	rope4 = new Rope(constraintBob4.body , roof.body , -constraintBobDiameter*2 , 0);
	rope5 = new Rope(constraintBob5.body , roof.body , -constraintBobDiameter*2 , 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  constraintBob1.display();
  constraintBob2.display();
  constraintBob3.display();
  constraintBob4.display();
  constraintBob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites();
 
}



