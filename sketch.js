
var monkey , monkey_running
var banana ,bananaImage, enemy, enemyImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  enemyImage = loadImage("obstacle.png");
  bananagroup = new Group()
  enemygroup = new Group()
 
}



function setup() {
  createCanvas(600, 600);


  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  monkey.scale = 0.1
  
  if(ground.x<10 ){
   ground.x = ground.width/2
  }

  
}


function draw() {
  background("white")
    bananafunc();
   enemyfunc();
  monkey.y = monkey.y + 3 
  monkey.collide(ground)
  
 if(keyDown("space")){
   monkey.y = monkey.y - 5
 

 }
  if(ground.x<10 ){
   ground.x = ground.width/2
  }
  
     stroke("white")
   textSize(20)
   fill("white")
   text("Score: + score,500,50")
   stroke("black")
   textSize(20)
   fill("black")
   survivalTime = Math.ceil(frameCount/frameRate())
   text("survival time:"+survivalTime,100,50)
    drawSprites()
}
function bananafunc() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(200, 200, 20, 20)
    banana.scale = 0.07
    banana.y = Math.round(random(80, 200));
    banana.velocityX = -4
    banana.setLifetime = 100
    bananagroup.add(banana)
     banana.addImage(bananaImage)
    
  }}
function enemyfunc() {
  if (frameCount % 100 === 0) {
    var enemy = createSprite(600, 325, 10, 40);
    enemy.setLifetime = 100
    enemy.velocityX = -4
    enemygroup.add(enemy)
    enemy.addImage(enemyImage) 
    enemy.scale = 0.1
  }}
    
    
    
    
    