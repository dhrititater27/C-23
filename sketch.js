const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,300,50,50);
    ground = new Ground(200,380,400,10);
    box2 = new Box(240,220,50,100);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
}
