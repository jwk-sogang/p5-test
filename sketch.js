var cars = [];

function setup() {
 createCanvas(480, 270);
 for (var i = 0; i < 100; i++) { // Initialize each Car using a for loop.
   cars[i] = new Car(color(i*2),0,i*2,i/20.0);
 }
}

function draw() {
 background(255);
 for (var i = 0; i < cars.length; i++) { // Run each Car using a for loop.
   cars[i].move();
   cars[i].display();
 }
}

class Car{
  constructor(tempC, tempXpos, tempYpos, tempXspeed){
    this.c=tempC;
    this.xpos=tempXpos;
    this.ypos=tempYpos;
    this.xspeed=tempXspeed;
    
  }
  display(){
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(this.xpos,this.ypos,20,10);
  }
  move(){
    this.xpos=this.xpos+this.xspeed;
    if(this.xpos>width){
      this.xpos=0;
    }
  }
}