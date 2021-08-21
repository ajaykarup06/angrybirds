const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground;
var pig1;
var log1;
var log2;
var log3;
var log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    myengine=Engine.create()
    myworld=myengine.world;

    box1 = new Box(700,347,50,50);
    box2 = new Box(850,347,50,50)
    box3 = new Box(700,292,50,50)
    box4 = new Box(850,292,50,50)
    box5 = new Box(750,227,50,50)

    pig1 = new Pig(775,347,20,20)
    bird = new Bird(200,347,30,30)

    log1 = new Log(775,297,210,5,PI)
    log2 = new Log(775,247,210,5,PI)
    log3 = new Log(760,217,140,6,-PI/4)
    log4 = new Log(860,167,140,6,PI/4)

    ground = new Ground(600,400,1200,50)
}

function draw(){
    background(0);
    Engine.update(myengine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}