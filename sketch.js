var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var world,engine;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
	
	var starBody_option = {
		isStatic: true
	}
	
	starBody = Bodies.circle(650 , 30 , 5,starBody_option);
	World.add(world, starBody);

	
	
}


function draw() {
  background(bgImg);

  Engine.update(engine);

 

  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(starBody,false);
}

if(starBody.position.y > 480){
	Matter.Body.setStatic(starBody,true);
}

star.x = starBody.position.x;
star.y = starBody.position.y;

  drawSprites();

}

function keyPressed() {

	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 10;
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 10;
	}	
		
}
