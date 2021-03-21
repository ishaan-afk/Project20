var  MouseImage,mouse,mouseImage2,mouseImage3;
var catImage,catImage2,cat,catImage3;
function preload() {
    //load the images here

MouseImage=loadAnimation ("mouse1.png");
mouseImage2 = loadAnimation ("mouse2.png","mouse3.png");
mouseImage3 = loadAnimation ("mouse4.png");

bg = loadImage ("garden.png");

catImage=loadAnimation ("cat1.png");
catImage2 = loadAnimation ("cat2.png","cat3.png");
catImage3= loadAnimation ("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite (675,650,50,50);
cat.addAnimation ("catImage",catImage);
cat.scale = 0.2;
mouse = createSprite (200,650,50,50);
mouse.addAnimation ("mouseImage",MouseImage);
mouse.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    
if (cat.x - mouse.x < (cat.width-mouse.width)/2) {
    cat.addAnimation ("catImage",catImage3);
    cat.changeAnimation ("catImage");
    mouse.addAnimation ("mouseImage",mouseImage3);
   mouse.changeAnimation ("mouseImage");
   cat.velocityX = 0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
      cat.velocityX = -5;
      cat.addAnimation ("catImage",catImage2);
   cat.changeAnimation ("catImage");
   mouse.addAnimation ("mouseImage",mouseImage2);
   mouse.changeAnimation ("mouseImage");
  }


}
