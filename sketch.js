var birdFlying;
var bgImg;
var player1 , player2;
var player1Img , player2Img;
var wood , stone , woodG , woodImg , stoneG , stoneImg;
var score = 0;

function preload() {
    birdFlying = loadAnimation("./assets/bird2.png" , "./assets/bird3.png" ,
                "./assets/bird4.png" , "./assets/bird5.png" , "./assets/bird6.png");
    bgImg = loadImage("./assets/bg2.jpg");
    player1Img = loadImage("./assets/cycle1.png");
    player2Img = loadImage("./assets/cycle2.png");
    woodImg = loadImage("./assets/wood.png");
    stoneImg = loadImage("./assets/stone.png");
}

function setup() {
    createCanvas(1200 , 600);

    player1 = createSprite(500 , 400 ,100 , 100);
    player1.addImage(player1Img);

    player2 = createSprite(400 , 400 ,100 , 100);
    player2.addImage(player2Img);

    woodG = new Group();
   stoneG = new Group();

}

function draw() {
    background(bgImg);

    createWood();
    createStone();

    drawSprites()
}

function createWood() {
    if (frameCount % 120 === 0) {
      wood = createSprite(1220 , Math.round(random(500 , 518)));
      wood.addImage(woodImg);
      wood.scale = 0.3;
      wood.velocityX = -5;
     // wood.lifetime = 500;
  
      woodG.add(wood);
    }
  }

  function createStone() {
    if (frameCount % 270 === 0) {
      stone = createSprite(1220 , Math.round(random(500 , 518)));
      stone.addImage(stoneImg);
      stone.scale = 0.3;
      stone.velocityX = -5;
     // stone.lifetime = 500;
  
      stoneG.add(stone);
    }
  }