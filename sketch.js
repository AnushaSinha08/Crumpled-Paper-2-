const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var groundSprite,ground;
var Paper1;
var DustbinObject;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1380, 700);
	

	engine = Engine.create();
	world = engine.world;

	DustbinObject = new dustbin(1200,590);
	DustbinObject.depth = +1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0);

    Paper1 = new paper (40,68,20);

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

 	World.add(world, ground);
	Engine.run(engine);
  

	
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  DustbinObject.display();
  Paper1.display();
 

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === 32) {

  		 Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:35,y:-30})

	}
}
