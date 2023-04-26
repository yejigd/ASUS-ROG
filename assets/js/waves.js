var isMobile = false;
function is_mobile(){
    if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;

        return isMobile;
    }
}

function setup () {
  let size = min(windowWidth, windowHeight) * 0.96;
  size = floor(size);
  var cnv = createCanvas(windowWidth, windowHeight);

  cnv.parent('waves');
  cnv.id('waves_cnv');

  noiseSeed(random(100));
  mouseY = height / 2;
  noFill();
}
function windowResized () {
  let size = min(windowWidth, windowHeight) * 0.96;
  size = floor(size);

  if(!is_mobile()){
    resizeCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    draw();
  }
}

function draw () {
  clear();
  beginShape();
  const _o = millis() * 0.001;
  
  const amount = 7;
  const ampl = height * 0.1;
  
  for(var k=0;k<amount;k++) {
      beginShape();
      const offset = (1 - k/amount) * 4;
      const detail = max(4, mouseX / windowWidth * 60);
      for(var i=0;i<(width+detail);i+=detail) {
        let y = height * 0.5;
        y += sin(i * 0.01 - _o + offset) * ampl;
        y += sin(i * 0.02 - _o + offset) * ampl;
        y += sin(i * 0.04 - _o + 10 + offset + noise(_o * 0.1 + (i/width) * 5) * 10) * ampl;
        vertex(i, y);
      }
      stroke(255, 255, 255, (k/(amount - 1) * 255));
      endShape();
  }
}