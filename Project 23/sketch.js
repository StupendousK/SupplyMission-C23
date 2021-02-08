// I couldn't figure out the scale part of it

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,grounds;

var box, box2, box3;
var spriteBox, spriteBox2, spriteBox3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	
	var options = {
		isStatic:true
	}

	box = Bodies.rectangle(370, 635, 200, 20, options);
	World.add(world, box);

	box2 = Bodies.rectangle(260, 610, 20, 100, options);
	World.add(world, box2);

	box3 = Bodies.rectangle(450, 610, 20, 100, options);
	World.add(world, box3);

	spriteBox = createSprite(360, 650, 200, 20);
	spriteBox.shapeColor = "red";

	spriteBox2 = createSprite(260, 610, 20, 100);
	spriteBox2.shapeColor = "red";

	spriteBox3 = createSprite(460, 610, 20, 100);
	spriteBox3.shapeColor = "red";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  if(keyPressed()) {

	Matter.Body.setStatic(packageBody, false);
 }

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	return true;
  }
  else {
	  return false;
  }
}