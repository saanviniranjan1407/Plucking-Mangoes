const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImage;
var stone;
var ground;
var tree, treeImage;
var mango1, mango2, mango3,mango4,mango5;

function preload(){
	boyImage = loadImage('images/boy.png');
	treeImage = loadImage('images/tree.png');
}

function setup() {
	createCanvas(1200,450);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,350);
	boy.addImage(boyImage);
	boy.scale = 0.12;

	tree = createSprite(850,250);
	tree.addImage(treeImage);
	tree.scale = 0.3;

	stone = new Stone(130,270);
	ground = new Ground(600,440,1200,10);
	mango1 = new Mango(500,500,100,50);

	Engine.run(engine);  
}

function draw() {
	rectMode(CENTER);
  	background(230,230,230);
	
	drawSprites(); 
	stone.display();
	ground.display();
	mango1.display();
}