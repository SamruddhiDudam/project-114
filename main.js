function preload() {

  }
  
function setup() {
  canvas = createCanvas(500,340);
  canvas.center();
  video = createCapture(VIDEO);
  video.size();
  video.hide();
}
  

function draw() {
image(video,0,0,640,480);
  }
  
function take_snapshot(){    
    save('myFilterImage.png');
  }