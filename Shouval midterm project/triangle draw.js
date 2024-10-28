

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);  
  background(0,0,0);
}

function draw() {

}

function keyPressed(){
  
  stroke(255, 255, 255);  
  fill(243,136,230)
 triangle(pmouseX,pmouseY,mouseX, mouseY, 80, 50)

}