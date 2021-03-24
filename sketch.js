
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{


}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperObject = new Paper(40,390,50)

	ground = new Ground(600,450,1200,20)

	bin1 = new Dustbin(870,430,250,30)
	bin2 = new Dustbin(1000,340,30,195)
	bin3 = new Dustbin(755,340,30,195)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paperObject.display();
  
  ground.display();

 bin1.display();
 bin2.display();
 bin3.display();

  drawSprites();
 
}
  
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


