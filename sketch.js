var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftSide, bottomSide, rightSide, boxBody;

function preload() {
	//load the images for the helicopter and package
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//create the canvas
	createCanvas(800, 700);

	//center the sprites
	rectMode(CENTER);

	//create the box
	leftSide = createSprite(260,610,20,100);
	bottomSide = createSprite(360,650,200,20);
	rightSide = createSprite(460,610,20,100);

	//give the box color
	leftSide.shapeColor = "red";
	bottomSide.shapeColor = "red";
	rightSide.shapeColor = "red";

	//create the package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//create the helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//create the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//create the package body and add it to the world
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//create the ground and add it to the world
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//create the box body
	boxBody = Bodies.rectangle(360,640,200,20,{isStatic:true});
	World.add(world,boxBody);

	Engine.run(engine);

}


function draw() {
	//center the sprites
	rectMode(CENTER);

	//set the background color
	background(0);

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y;

	//make package drop when key is pressed
	keyPressed();

	//draw the sprites
	drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}