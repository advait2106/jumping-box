var canvas;
var music;
var block1, block2, block3, block4, edges, ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(0,570,200,30);
block2=createSprite(250,570,200,30);
block3=createSprite(500,570,200,30);
block4=createSprite(750,570,200,30);
block1.shapeColor="red";
block2.shapeColor="blue";
block3.shapeColor="yellow";
block4.shapeColor="green";
    //create box sprite and give velocity
    //ball=createSprite(random(20,780),100,40,40);
    ball=createSprite(20,100,40,40);
    ball.shapeColor="pink";
    ball.velocityX=5
    ball.velocityY=-3
    
}

function draw() {
    background("white");
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball)&&ball.bounceOff(block1))
    {
     ball.shapeColor="red";
    ball.velocityX=0;
    ball.velocityY=0
       music.stop() 
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2))
    {
     ball.shapeColor="blue";
       music.play() 
    }
    if(block3.isTouching(ball)&&ball.bounceOff(block3))
    {
     ball.shapeColor="yellow";
       music.play() 
    }
    if(block4.isTouching(ball)&&ball.bounceOff(block4))
    {
     ball.shapeColor="green";
       music.play() 
    }
   drawSprites() ;


    //add condition to check if box touching surface and make it box
}
