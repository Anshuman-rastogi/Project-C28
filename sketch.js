const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree, treeImg;
var boyImage;
var stoneObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11,  mango12;
var slingShot;

function preload()
{
	boyImage = loadImage("Images/boy.png");
	treeImg = loadImage("../Images/tree.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,590,1200,20);
	//boy = new Boy(260,490, 200, 350);
	stoneObj = new Stone(200,400,50);
	treeObj=new Tree(980,580);

	mango1 = new Mango(850, 190, 50);
	mango2 = new Mango(910, 240, 60);
	mango3 = new Mango(930, 160, 60);
	mango4 = new Mango(980, 210, 40);
	mango5 = new Mango(1070, 215, 60);
	mango6 = new Mango(1040, 80, 50);
	mango7 = new Mango(945, 90, 50);
	mango8 = new Mango(990, 140, 60);
	mango9 = new Mango(1140, 225, 70);
	mango10 = new Mango(990, 65, 60);
	mango11 = new Mango(1060, 160, 60);
	mango12 = new Mango(1110, 145, 50);
	
	slingShot = new SlingShot(stoneObj.body, {x:200, y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);

  textSize(20);
  fill(128,128,128);
  text("Press space to get one more chance to play!!", 30, 30);

  image(boyImage,170,310, 200, 350);
  
	ground.display();
	//boy.display();
	treeObj.display();
	stoneObj.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();

	slingShot.display();

	detectCollision(stoneObj, mango1);
	detectCollision(stoneObj, mango2);
	detectCollision(stoneObj, mango3);
	detectCollision(stoneObj, mango4);
	detectCollision(stoneObj, mango5);
	detectCollision(stoneObj, mango6);
	detectCollision(stoneObj, mango7);
	detectCollision(stoneObj, mango8);
	detectCollision(stoneObj, mango9);
	detectCollision(stoneObj, mango10);
	detectCollision(stoneObj, mango11);
	detectCollision(stoneObj, mango12);
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function detectCollision(lstone, lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:200, y:400});
		slingShot.attach(stoneObj.body);
	}
}