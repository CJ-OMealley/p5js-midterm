

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);  
  background(0,0,0);
  angleMode(DEGREES)
}

function draw() {

}

function mouseDragged()
{
  rotate(mouseX,mouseY)
  stroke(255, 255, 255);  
  fill(random(0,20),random(120,150),random(170,255))
 square(winMouseY,winMouseX,mouseX, mouseY)

}