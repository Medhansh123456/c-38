var bg,bge;
var space;
var player;
var game;

function preload(){

bge=loadImage("download.png");
space=loadImage("sp.jpg");
rocket=loadImage("med.png")
over=loadImage("game.jpg")
b=loadImage("black.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg = createSprite(400,100,400,20);
  bg.addImage(space);
  bg.scale=0.9
  bg.x = width /2;

  
player=createSprite(200,200);
player.addImage(rocket);
player.scale=0.09;

black=createSprite(200,20000)
black.addImage(b);
black.scale=8;

game=createSprite(67000,300);
game.addImage(over);
game.scale=2

ufoGroup=new Group();


player.setCollider("rectangle",0,0,player.width,player.height);
player.debug = true
}

function draw(){
background(0);
player.y=World.mouseY;

bg.velocityX=-5

    if(bg.x<400)
    {
       bg.x=1000
    }

    if(ufoGroup.isTouching(player)){
    bg.x=20000;
    game.x=670;
    player.x=10000
    black.y=200

    }

    
ufo()

drawSprites();
}

function ufo(){
  if(frameCount%100===0){
    var ufo=createSprite(2000,100);
    ufo.y=Math.round(random(100,800));
    ufo.scale=0.09;
    ufo.addImage(bge);
    ufo.velocityX=-30;
    ufoGroup.add(ufo);
    ufo.depth=black.depth-1;
  }
}