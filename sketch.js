let myposX = 25;
let myposY = 25;
let myWidth = 50, myHeight = 50;
let mySpeed = 5;
let points = 0;

let enemyX,enemyY;
let enemyWidth = 50, enemyHeight = 50;
function setup(){
    createCanvas(500,500)
    background(0)
    rectMode(CENTER)
    enemyX = random(25,475)
    enemyY = random(100,475)

    clefairy = loadImage("clefairy.png")
    togepi = loadImage("togepi.png")
    backdrop = loadImage("e.png")
}

function draw(){
    //background(0)
    image(backdrop,0,0,500,500)
    fill(255,0,0)
    image(togepi,enemyX,enemyY,enemyWidth,enemyHeight)
    
    fill(0,0,255)
    image(clefairy,myposX,myposY,myWidth,myHeight)
    if (keyIsDown(LEFT_ARROW)){
        myposX -= mySpeed
    }
    if (keyIsDown(RIGHT_ARROW)){
        myposX += mySpeed
    }
    if (keyIsDown(UP_ARROW)){
        myposY -= mySpeed
    }
    if (keyIsDown(DOWN_ARROW)){
        myposY += mySpeed
    }
    if(myposX <= 25){
        myposX = 25
    }
    if(myposX >= 475){
        myposX = 475
    }
    if(myposY <= 25){
        myposY = 25
    }
    if(myposY >= 475){
        myposY = 475
    }

    myLeft = myposX - (myWidth/2)  
    myRight =  myposX + (myWidth/2)
    myTop = myposY - (myHeight/2)
    myBottom = myposY + (myHeight/2)
    
    enemyLeft = enemyX - (enemyWidth/2)  
    enemyRight =  enemyX + (enemyWidth/2)
    enemyTop = enemyY - (enemyHeight/2)
    enemyBottom = enemyY + (enemyHeight/2)

    if(myLeft > enemyRight || myRight < enemyLeft || myBottom < enemyTop || myTop > enemyBottom){}
    else{
        points++;
        console.log(points)
        //text(`Enemies collected: ${points}`)
        enemyX = random(25,475)
        enemyY = random(100,475)
    }
    fill(255)
    text(`Enemies collected: ${points}`,340,25)
}