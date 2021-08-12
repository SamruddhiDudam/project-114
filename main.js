function preload() {

  }
  
function setup() {
  canvas = createCanvas(640,480);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();
  }
  
function draw() {

  }
  
function take_snapshot(){    
    save('myFilterImage.png');
  }