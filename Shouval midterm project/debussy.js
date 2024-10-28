let vid; 

let vScale = 8

let piano

function setup() {
  piano = loadSound('Debussy Prludes  Book 1 L 117  Arr Dan Golding  La srnade interrompue.mp3')
 createCanvas(1920,1080);
  vid =  createCapture(VIDEO, {flipped:true});
  vid.size(400, 300);
  vid.hide();
  
}

function draw() {
  
  
  

}

function mouseDragged(){
  fill(0, 4);
  rect(0, 0, width, height);
  fill(0);
  image(vid,mouseX, mouseY, 60, 60);
  filter(INVERT)
   

}

function mousePressed(){
  
  if (!piano.isPlaying()){
    piano.play()
  }
}


function mouseReleased(){
  if (piano.isPlaying){
    piano.pause();
  }
}