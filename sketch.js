const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var matter,engine,world,bodies,body,constraint;

var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box15,box16,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27;
var box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39;
var stone,slingshot;

function setup() {
  createCanvas(2000,1000);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  //ground//

  ground1 = new GROUND(200,900,5000,20);
  ground2 = new GROUND(900,650,700,20);
  ground3= new GROUND(1700,400,500,20);

  //tower1//

  box1 = new BOX(600,500,100,100);
  box2 = new BOX(700,500,100,100);
  box3 = new BOX(800,500,100,100);
  box4 = new BOX(900,500,100,100);
  box5 = new BOX(1000,500,100,100);
  box6 = new BOX(1100,500,100,100);
  box7 = new BOX(1200,500,100,100);

  box8 = new BOX(650,400,100,100);
  box9 = new BOX(750,400,100,100);
  box10 = new BOX(850,400,100,100);
  box11 = new BOX(950,400,100,100);
  box12 = new BOX(1050,400,100,100);
  box13 = new BOX(1150,400,100,100);

  box14 = new BOX(700,300,100,100);
  box15 = new BOX(800,300,100,100);
  box16 = new BOX(900,300,100,100);
  box17 = new BOX(1000,300,100,100);
  box18 = new BOX(1100,300,100,100);

  box19 = new BOX(750,200,100,100);
  box20 = new BOX(850,200,100,100);
  box21 = new BOX(950,200,100,100);
  box22 = new BOX(1050,200,100,100);

  box23 = new BOX(800,100,100,100);
  box24 = new BOX(900,100,100,100);
  box25 = new BOX(1000,100,100,100);

  box26 = new BOX(850,0,100,100);
  box27 = new BOX(950,0,100,100);

  //tower2//

  box28 = new BOX(1500,300,100,100);
  box29 = new BOX(1600,300,100,100);
  box30 = new BOX(1700,300,100,100);
  box31 = new BOX(1800,300,100,100);
  box32 = new BOX(1900,300,100,100);

  box33 = new BOX(1550,200,100,100);
  box34 = new BOX(1650,200,100,100);
  box35 = new BOX(1750,200,100,100);
  box36 = new BOX(1850,200,100,100);

  box37 = new BOX(1600,100,100,100);
  box38 = new BOX(1700,100,100,100);
  box39 = new BOX(1800,100,100,100);

  //rock//
  stone = new BIRD(300,300,90,90);

  //slingshot//
  slingshot = new SLINGSHOT(stone.body,{x:300, y:300});

  Engine.run(engine);
}

function draw() {
  background("silver");  
    
  //ground
  ground1.display();
  ground2.display();
  ground3.display();

  //tower1//
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  box23.display();
  box24.display();
  box25.display();

  box26.display();
  box27.display();

  //tower2//
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();

  //stone//
  stone.display();

  //slingshot//
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(stone.body);
  }
}