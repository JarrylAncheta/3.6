
function setup() {
  createCanvas(600, 600);
  background(220, 130, 300)
  strokeWeight(9);

}

function draw() {
  strokeWeight(7);
  line(10, 10, 390, 10);
  line(50, 50, 350, 50);
  line(50, 250, 50, 50);
  line(50, 300, 50, 350);
  line(10, 390, 50, 390);
  line(10, 10, 10, 390);
  line(390, 10, 390, 390);
  line(10, 390, 300, 390);
  line(390, 390, 350, 390);
  line(350, 50, 350, 90);
  line(350, 150, 350, 350);
  line(50, 350, 350, 350);

  line(90, 90, 90, 310);
  line(150, 90, 90, 90);
  line(190, 90, 310, 90);
  line(90, 310, 220, 310);
  line(260, 310, 310, 310);
  line(310, 90, 310, 310);

  line(130, 130, 130, 200);
  line(130, 250, 130, 270);
  line(270, 130, 130, 130);
  line(130, 270, 270, 270);
  line(270, 130, 270, 270);

  line(170, 170, 170, 230);
  line(230, 170, 170, 170);
  line(170, 230, 230, 230);
  line(230, 170, 230, 230);

  line(350, 300, 390, 300);
  line(310, 250, 350, 250);
  line(90, 250, 50, 250);
  line(240, 90, 240, 130);
  line(170, 200, 130, 200);

  if (mouseIsPressed){
    stroke(map(mouseX, 20, 900, 0, 600, true))
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  function draw() {
    if (mouseIsPressed) {
      background(backgroundColor);
      backgroundColor--;
      //array.push([mouseX, mouseY])
    }
  }

}

  function keyTyped(){

    if (key === 's'){
      //save image
      saveCanvas(`fileName`, `png`);
    } else if (key === 'd'){
      //display image
    }

    return false;

  }
