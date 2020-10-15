const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;
var paperObject;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);

	box1 = new Dustbin(700,height - 35,150,20);
	box2 = new Dustbin(620,height - 75,20,100);
	box3 = new Dustbin(780,height - 75,20,100);

	paperObject = new Paper(200,100, 20);
 
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  
  paperObject.display();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:50,y:-50});
	}
}

