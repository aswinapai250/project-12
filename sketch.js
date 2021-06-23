  var garden,rabbit;
  var gardenImg,rabbitImg;
  var apple,appleimg;
  var leaf,leaves;

  function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leaves = loadImage("leaf.png");

  }

  function setup(){
    
    createCanvas(400,400);
    
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);


  }


  function draw() {
    background(0);
    
    edges= createEdgeSprites();
    rabbit.collide(edges);
  rabbit.x = mouseX;
    drawSprites();
    createLeaves();
    createApple();
    
  }



  function createApple(){
    if(frameCount %80== 0){

    
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleimg);
    apple .scale = 0.10;
    apple.velocityY = 2;
    apple.lifetime = 160;
    }


    
  }
  
    
    


  function createLeaves(){
    if(frameCount %80== 0){

    leaf= createSprite(random(50,350),40,10,10);
    leaf.addImage(leaves);
    leaf.scale = 0.10;
    leaf.velocityY = 2;
    leaf.lifetime = 160;

    
    }
  
 
  }
  var select_sprite = Math.round(random(1,2));
  if(frameCount % 80== 0){
    if(select_sprite == 1){
      createApple();
    }
    
  }
  select_sprite = Math.round(random(1,2));
  if(frameCount % 80== 0){
  if(select_sprite == 2){
    createLeaves();
  }
}