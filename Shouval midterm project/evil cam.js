let vid; 

let vScale = 8

let audio

function setup() {
  
 createCanvas(640,480);
  vid =  createCapture(VIDEO, {flipped:true});
  vid.size(400, 300);
  vid.hide();
  
   
  
  
}

function draw() {
    rect(0, 0, width, height);
  fill(0);
  image(vid,mouseX, mouseY, 400, 400);
    fill(17, 144, 85)

 
  
  

}

function mouseDragged(){
 
  filter(DILATE)
  filter(BLUR )
  filter(INVERT)  
function mouseClicked(){}
  
  filter(THRESHOLD)

