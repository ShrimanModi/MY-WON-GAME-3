var helicopter,HIMG,RIMG;
var r1,r2,r3,r4;
var Score=0;
var back;
var background;
var gameState="play";
var gameState="end";

function preload(){
HIMG=loadImage("helicopter.png");
RIMG=loadImage("rock.jpg");
r1=loadImage("rock1.png");
r3=loadImage("rock3.png");
r4=loadImage("rock2.png");
back=loadImage("back.jpg");
}

function setup() {
  createCanvas(1000,500)
 
  background=createSprite(0,0,1000,500);
  background.addImage(back);
  background.velocityX=-3;
  background.scale=3;

  textSize(50);
  fill("white")
  text("Score:"+Score,480,50)

  helicopter=createSprite(400, 200, 50, 50);
  helicopter.addImage(HIMG);
  helicopter.scale=0.4;

  var rand=Math.round(random(1,1350))
  console.log(rand);

}

function draw() {
  


  textSize(50);
  fill("white")
  text("Score:"+Score,480,90)

 //Score = Score + Math.round(getFrameRate()/60);

  if(background.x<0){
    background.x=background.width/2;}

  if(keyDown(UP_ARROW)){
    helicopter.y=helicopter.y-6;
  }

  if(keyDown(DOWN_ARROW)){
    helicopter.y=helicopter.y+6;
  }

  if(keyDown(LEFT_ARROW)){
    helicopter.x=helicopter.x-6;
  }

  if(keyDown(RIGHT_ARROW)){
    helicopter.x=helicopter.x+6;
  }





  spawnR(); 
  drawSprites();
}

function spawnR(){
  if(frameCount % 95===0){
    var rock=createSprite(1350,0,30,30);
    rock.scale=0.3;
    rock.velocityX=-6;
    rock.y=Math.round(random(0,500))

    var rand=Math.round(random(1,3))
    switch(rand){
      case 1: rock.addImage(r1);
             break;
      case 2: rock.addImage(r3);
            break;
      case 3: rock.addImage(r4);
            break;
        default: break;
    }

  }
}