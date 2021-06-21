
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2, floor;
var box, slingShot, polygon;
var Score = 0;

function preload() {    
    getBackgroundImage()
}

function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    //noStroke();
    textSize(35)
    fill("white");
    text("SCORE =" +Score,740,40);
    

    stand1 = new Stand(800, 300, 170, 10)
    stand2 = new Stand(550, 500, 240, 10)

    var locX, locY;
    for(i=0; i < 25; i++) {
        if (i < 7) {
            locX = 460 + (i*30);
            locY = 480;
        } else if (i >=7 && i < 12) {
            locX = 485 + ((i - 7)*30);
            locY = 460;
        } else if (i>=12 && i<15) {
            locX = 510 + ((i-12)*30);
            locY = 440;
        } else if (i==15) {
            locX = 535;
            locY = 420;
        } else if (i>=16 && i<21){
            locX = 740 + ((i - 16)*30);
            locY = 280;
        } else if(i>=21 && i<24){
            locX = 765 + ((i - 21)*30);
            locY = 260;
        } else if (i==24){
            locX = 790;
            locY = 240;
        }

        box[i] = new Box(locX, locY, 30, 40); 
    }

  //polygon = Bodies.circle(50,200,20);
  polygon = new Polygon(50, 200, 30);
  slingShot = new SlingShot(polygon.body, {x: 150, y: 200});
 
  floor = new Floor(600,595,1200,10);   
}

function draw(){
    background("grey");
    Engine.update(engine);  

    for (i=0; i<25; i++){
        box[i].display();
    }

    polygon.display();
    slingShot.display();

    stand1.display();
    stand2.display();

    floor.display();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
if (keyCode === 32) {
    slingShot.attach(polygon.body);
    }
}


async function getBackgroundImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    //console.log(responjson);  
    var datetime = responsejson.datetime;
    var hour = datetime.slice(11,13);
    if (hour>=06 && hour<=19) {
        bg="sprites/bg.png";
        
    }
    else{
        bg="sprites/bg2.jpg";
    }
    console.log(bg);
    backgroundImg = loadImage(bg);
  }

box1.Score();
box2.Score();
box3.Score();
box4.Score();
box5.Score();
box6.Score();
box7.Score();
box8.Score();
box9.Score();
box10.Score();
box11.Score();
box12.Score();
box13.Score();
box14.Score();
box15.Score();
box15.Score();
box16.Score();
box19.Score();
box18.Score();
box19.Score();
box21.Score();
box22.Score();
box23.Score();
box24.Score();
box25.Score();