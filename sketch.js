
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine,
const World = Matter.World,
const Bodies = Matter.Bodies;
 
var engine;
var world;
var trajectory =  [];

var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

for(var i=0; i<this.trajectory.length; i++){
    image(this.box, this.trajectory[i][0], this.trajectory[i][1]);
  }
}
function mousePressed() {
    if (mouseY < 350) {
      ball.create
        // Every time a mouse press occures create a new box.
    
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for(var i = 50; i < 390; i=i+50) { 
        var box = new Box(x,y,width,height,options);
}
 
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
              friction:0,
              restitution: 0.4
              density :1.0,
          }
          this.body = Bodies.rectangle(x,y,r,options);
    push();
          World.add(world, this.body);
          var pos =this.body.position;
          ellipseMode(RECTANGLE);
          fill("green");
        ellipse(pos.x, pos.y,);
    pop();      
        }

function bounceoff(box1,box2){
    
  if (box1.x - box2.x < box2.width/2 + box1.width/2
    && box2.x - movingRect.x < box2.width/2 + box1.width/2) {
        box1.velocityX = box1.velocityX * (-1);
  box2.velocityX = box2.velocityX * (-1);
}
if (box1.y - box2.y < box2.height/2 + box1.height/2
  && box2.y - box1.y < box2.height/2 + box1.height/2){
    box1.velocityY = box1.velocityY * (-1);
  box2.velocityY = box2.velocityY * (-1);
}
}
        

    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box



    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {

    }
