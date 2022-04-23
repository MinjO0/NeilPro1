var score =0;
var star1Img,star2Img,star3Img,star4Img,star5Img,rocket1Img;
var sp,bg;
var star1;

function preload(){
    star1Img = loadImage("star 1.png");
    star2Img = loadImage("star 2.png");
    star3Img = loadImage("star 3.png");
    star4Img = loadImage("star 4.png");
    star5Img = loadImage("star 5.png");
    rocket1Img = loadImage("rocket 1.png");
    sp = loadImage("sb.png");
}
function setup(){
    createCanvas(windowWidth, windowHeight );
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    bg.addImage(sp);
    bg.scale = 1.1;
    
    createEdgeSprites()
    

    star1 = createSprite(displayWidth-150,100,20,20)
    star1.visible = true
    star1.addImage("star1",star1Img)
    star1.scale = 0.2
    star1.velocityX= -6
    star1.velocityY = 4
  
  
    

    star2 = createSprite(displayWidth-493,120,20,20);
    star2.visible = true
    star2.addImage("star2",star2Img);
    star2.scale = 0.2;
    star2.velocityX=7
    star2.velocityY=5
    
   

    star3 = createSprite(displayWidth-930,639,20,20);
    star3.visible = true
    star3.addImage("star3",star3Img);
    star3.scale = 0.2;
    star3.velocityX=-7
    star3.velocityY=-4
   

    star4 = createSprite(displayWidth-67,244,20,20);
    star4.visible = true
    star4.addImage("star4",star4Img);
    star4.scale = 0.2;
    star4.velocityX=-5
    star4.velocityY=8
    
    star5 = createSprite(displayWidth-930,93,20,20);
    star5.visible = true
    star5.addImage("star5",star5Img);
    star5.scale = 0.2;
    star5.velocityX=9
    star5.velocityY=-5
   

    


}
function draw() {
    background(0);

     if (star1.x > windowWidth || star1.x <0){
    star1.x = displayWidth -150;
  }

  if(star1.y > windowHeight || star1.y <0){
      star1.y = 100;
  }

    
    drawSprites();

}
