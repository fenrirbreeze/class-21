var box1,box2,box3;

function setup() {
  createCanvas(800,400);
 box1 = createSprite(400, 200, 50, 50);
 box2 =createSprite(400,50,50,50);
 box3 = createSprite(400,100,50,50)
  box1.shapeColor = "red";
  box2.shapeColor = "red";
  box3.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

box2.x = mouseX
box2.y = mouseY

if(isTouching(box2,box3)){






box2.shapeColor = "blue"
box3.shapeColor = "blue"

}
else{
  box2.shapeColor = "red";
  box3.shapeColor = "red";
}

  drawSprites();
}
function isTouching(object1,object2){

  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
      return true


}
else{return false}

}
