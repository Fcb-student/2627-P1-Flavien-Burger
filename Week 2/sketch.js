let autoRoodX = 150
let autoRoodY = 500
let autoroodspeed = 3


let autoBlauwX
let autoWit

let stopLichtKleur = 1;

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(150, 255, 255);

  if (keyIsPressed == true) {
    if (keyCode == ENTER) {
    }
  }

  noStroke();
  fill(200, 200, 0, 200); // zonne stralling
  circle(100, 60, 75);
  fill(255, 255, 0); // zon maken
  circle(100, 60, 50);

  fill(150); // bergen
  triangle(210, 520, 320, 150, 270, 520);
  triangle(410, 520, 510, 100, 570, 520);
  triangle(650, 520, 750, 250, 750, 520);
  fill(170); // schaduw
  triangle(270, 520, 320, 150, 400, 520);
  triangle(570, 520, 510, 100, 600, 520);
  triangle(750, 520, 750, 250, 850, 520);
  // wolken
  fill(230);
  circle(30, 100, 40); // eerste
  circle(50, 110, 40);
  circle(70, 90, 40);
  circle(200, 80, 40); // tweede
  circle(220, 90, 40);
  circle(240, 70, 40);
  circle(510, 105, 60); // derde
  circle(520, 120, 60);
  circle(540, 135, 60);
  circle(760, 105, 50); // vierde
  circle(790, 90, 40);
  circle(830, 100, 50);
  fill(240);
  circle(40, 100, 40); // eerste
  circle(60, 110, 40);
  circle(80, 90, 40);
  circle(210, 80, 40); // tweede
  circle(230, 90, 40);
  circle(250, 70, 40);
  circle(500, 100, 60); // derde
  circle(520, 120, 60);
  circle(530, 120, 60);
  circle(750, 100, 50); // vierde
  circle(790, 95, 40);
  circle(830, 100, 50);

  fill(0, 200, 50); // grond
  rect(0, 500, 1000, 200);
  fill(0, 150, 40);
  rect(0, 510, 1000, 180);

  fill(80); // asfalt
  rect(0, 520, 1000, 170);
  fill(230); // witte streppen
  rect(10, 600, 80, 10, 80);
  rect(120, 600, 80, 10, 80);
  rect(230, 600, 80, 10, 80);
  rect(340, 600, 80, 10, 80);
  rect(450, 600, 80, 10, 80);
  rect(560, 600, 80, 10, 80);
  rect(670, 600, 80, 10, 80);
  rect(780, 600, 80, 10, 80);
  rect(890, 600, 80, 10, 80);

  fill(128, 75, 6); // aparte boom achter auto's
  rect(500, 385, 30, 130);
  fill(25, 89, 20);
  circle(480, 385, 80);
  fill(39, 112, 33);
  circle(510, 340, 80);
  fill(14, 130, 4);
  circle(540, 385, 80);

  // stoplicht
  fill(100);
  rect(900, 420, 30, 100);
  rect(885, 300, 60, 120);
  fill(255, 0, 0, 100);
  circle(915, 320, 30);
  fill(242, 124, 5, 100);
  circle(915, 360, 30);
  fill(0, 255, 0, 100);
  circle(915, 400, 30);

  // auto's
  autoRoodX = autoRoodX + autoroodspeed // snelheid van rode auto

  if ( autoRoodX > 1000){
    autoRoodX = -150
  }

  fill(255, 50, 50); // rood
  rect(autoRoodX, autoRoodY, 150, 40);
  rect(autoRoodX, autoRoodY - 40, 125, 40);
  fill(50, 50, 50);
  circle(autoRoodX + 25, autoRoodY+40, 50);
  circle(autoRoodX + 110, autoRoodY+40, 50);

  fill(100, 100, 255); // blauw
  rect(450, 500, 150, 40);
  rect(450, 460, 125, 40);
  fill(50, 50, 50);
  circle(475, 540, 50);
  circle(560, 540, 50);

  fill(200, 200, 200); // wit
  rect(700, 600, 150, 40);
  rect(700, 560, 125, 40);
  fill(50, 50, 50);
  circle(724, 640, 50);
  circle(810, 640, 50);

  fill(128, 75, 6); // bomen stam
  rect(50, 545, 30, 150);
  rect(800, 545, 30, 150);
  // bladeren
  fill(25, 89, 20);
  circle(40, 525, 80);
  circle(780, 525, 80);
  fill(39, 112, 33);
  circle(70, 480, 80);
  circle(810, 480, 90);
  fill(14, 130, 4);
  circle(100, 525, 80);
  circle(840, 525, 80);

 
  
  if (stopLichtKleur == 0){
    fill(255, 0, 0);
    circle(915, 320, 30);
    autoroodspeed = 0

  }

   if (stopLichtKleur == 2){
    fill(242, 124, 5);
    circle(915, 360, 30);
    autoroodspeed = 3
  }
   if (stopLichtKleur == 1){
    fill(0, 255, 0);
    circle(915, 400, 30);
    autoroodspeed = 3
  }

  fill(0);
  text("stoplichtKleur: "+stopLichtKleur, 60, 70)
}

function keyPressed()
{
  if (keyCode === 32) {
      
    stopLichtKleur = stopLichtKleur + 1;

    if(stopLichtKleur > 2)
    {
        stopLichtKleur = 0
    }
   
    }
}