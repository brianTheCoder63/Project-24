
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground = new ground(400,height,800,10)
  hammer = new hammer(300,50,100,20)
  iron = new iron(200,100,100,100)
  rubberball = new rubberball(100,100,20,20)
}


function draw() {
  rectMode(CENTER);
  background('white');
  ground.display();
  hammer.display();
  iron.display();
  rubberball.display();
//   drawSprites();
 
}



