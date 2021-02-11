var dog,happyDog;

var foodS,foodStock;

var database;

var score;



function preload()
{
	happyDog = loadImage('iamges/dogImg1.png')
  dog = loadImage('iamges/dogImg.png')
}

function setup() {
	createCanvas(500, 500);
  
foodStock=database.ref("food");
foodStock.on("value",readStock);

score = 0;
}


function draw() {  
background(46,139,87);


if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogHappy);
}

  drawSprites();
 
  fill("black");
  text("SCORE: " + score, 1200, 100);

}


function readStock(data) {
  foodS = data.val();
}


function writeStock(data) {

if(x<=0){
  x=0;
} else{
  x=x-1;
}



  database.ref('/').update({
Food:x
  })
}
