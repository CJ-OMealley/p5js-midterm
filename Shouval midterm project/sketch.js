let title, paragraph, myCanvas, testButton;

function setup() {
  myCanvas = createCanvas(200, 100);
  
// these allows us to grab a dom element from the html page 
  title = select("#id1");
  paragraph = select("#id2")
  textButton = select("#id3")
}

let x = 0, y = 0;
function draw() {
  

  paragraph.position(x,y);
  
  myCanvas.position(windowWidth-y,x);
  
 
  

 
}