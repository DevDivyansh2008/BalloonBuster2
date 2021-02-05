var arrow,arrowimage;
var bow,bowimage;
var Background,Backgroundimage;
var blueballoon,blueballoonimage;
var redballoon,redballoonimage;
var greenballoon,greenballoonimage;
var pinkballoon,pinkballoonimage;

function preload(){
 //load your images here 
 arrowimage        =loadImage("arrow0.png");
 bowimage          =loadImage("bow0.png");
 backgroundimage   =loadImage("background0.png");
 blueballoonimage  =loadImage("blue_balloon0.png");
 redballoonimage   =loadImage("red_balloon0.png");
 greenballoonimage =loadImage("green_balloon0.png");
 pinkballoonimage  =loadImage("pink_balloon0.png");
}

function setup() {
  createCanvas(600, 600);
Background=createSprite(0,0,600,600);
Background.addImage("backgroundimage",backgroundimage);
Background.scale=3;

  
for (var i = 130; i < 350; i=i+60) {
blueballoon = createSprite(140,i,10,10);
blueballoon .addImage("blue_balloon",blueballoonimage);
blueballoon.scale=0.1;
}

for(var i=60;i<390;i=i+60){
redballoon  =createSprite(50,i,1,1);
redballoon  .addImage("red_balloon",redballoonimage);
redballoon.scale=0.1;
}

for(var i=110;i<390;i=i+60) {
greenballoon=createSprite(100,i,10,10);
greenballoon.addImage("green_balloon",greenballoonimage);
greenballoon.scale=0.1; 
}

for(var i=180;i<250;i=i+60) {
pinkballoon=createSprite(180,i,10,10);
pinkballoon.addImage("pink_balloon",pinkballoonimage);
pinkballoon.scale=1.2;
}
  
bow=createSprite(550,300,20,50);
bow.addImage("bow",bowimage);
bow.scale=1.2;
}

function draw() {

  background("Green");
  
  Background.velocityX =-3;
  if(Background.x<0) {
    Background.x =Background.width/2;
  }   
  if(keyDown("space")) {
  var temp_arrow =createArrow();
    //function call statement
    temp_arrow.addImage("arrow",arrowimage);
   temp_arrow.y =bow.y;
}  
  bow.y =World.mouseY;
  drawSprites();
}

function createArrow() {
  arrow =createSprite(360,100,5,10);
  
  arrow.velocityX = -6;
  arrow.scale =0.3
  return arrow;
  //return statement is used to send data to function draw.the data can be a number ,word,or a sprite. in this case we are returning the arrow sprite to function draw 
}