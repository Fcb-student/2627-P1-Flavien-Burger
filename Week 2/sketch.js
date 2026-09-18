let autoRoodX = 150
let autoRoodY = 500
let autoRoodSpeed = 4

let autoBlauwX = 450
let autoBlauwY = 500
let autoBlauwSpeed = 4

let autoWitX = 700
let autoWitY = 600
let autoWitSpeed = 6

let zonX = 100
let zonY = 60
let zonSpeed  = 2

let zonStralingX = 100
let zonStralingY = 60
let zonStralingSpeed = 2

let witWolk1X = 40
let witWolk2X = 60
let witWolk3X = 80
let witWolk4X = 210
let witWolk5X = 230
let witWolk6X = 250
let witWolk7X = 500
let witWolk8X = 520
let witWolk9X = 530
let witWolk10X = 750
let witWolk11X = 790
let witWolk12X = 830

let witWolk1Y = 100
let witWolk2Y = 110
let witWolk3Y = 90
let witWolk4Y = 80
let witWolk5Y = 90
let witWolk6Y = 70
let witWolk7Y = 100
let witWolk8Y = 120
let witWolk9Y = 120
let witWolk10Y = 100
let witWolk11Y = 95
let witWolk12Y = 100

let grijsWolk1X = 30
let grijsWolk2X = 50
let grijsWolk3X = 70
let grijsWolk4X = 200
let grijsWolk5X = 220
let grijsWolk6X = 240
let grijsWolk7X = 510
let grijsWolk8X = 520
let grijsWolk9X = 540
let grijsWolk10X = 760
let grijsWolk11X = 790
let grijsWolk12X = 830

let grijsWolk1Y = 100
let grijsWolk2Y = 110
let grijsWolk3Y = 90
let grijsWolk4Y = 80 
let grijsWolk5Y = 90
let grijsWolk6Y = 70
let grijsWolk7Y = 105
let grijsWolk8Y = 120
let grijsWolk9Y = 136
let grijsWolk10Y = 105
let grijsWolk11Y = 95
let grijsWolk12Y = 100


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

  zonStralingX = zonStralingX + zonStralingSpeed
  if (zonStralingX> 1100){
    zonStralingX = -200
  }

  zonX = zonX + zonSpeed
  if (zonX> 1100){
    zonX = -200
  }

  fill(200, 200, 0, 200); // zonne stralling
  circle(zonStralingX, zonStralingY, 75);
  fill(255, 255, 0); // zon maken
  circle(zonX, zonY, 50);

  fill(150); // bergen
  triangle(210, 520, 320, 150, 270, 520);
  triangle(410, 520, 510, 100, 570, 520);
  triangle(650, 520, 750, 250, 750, 520);
  fill(170); // schaduw
  triangle(270, 520, 320, 150, 400, 520);
  triangle(570, 520, 510, 100, 600, 520);
  triangle(750, 520, 750, 250, 850, 520);
  // wolken
  fill(200);
  circle(grijsWolk1X, grijsWolk1Y, 40); // eerste
  circle(grijsWolk2X, grijsWolk2Y, 40);
  circle(grijsWolk3X, grijsWolk3Y, 40);
  circle(grijsWolk4X, grijsWolk4Y, 40); // tweede
  circle(grijsWolk5X, grijsWolk5Y, 40);
  circle(grijsWolk6X, grijsWolk6Y, 40);
  circle(grijsWolk7X, grijsWolk7Y, 60); // derde
  circle(grijsWolk8X, grijsWolk8Y, 60);
  circle(grijsWolk9X, grijsWolk9Y, 60);
  circle(grijsWolk10X, grijsWolk10Y, 50); // vierde
  circle(grijsWolk11X, grijsWolk11Y, 40);
  circle(grijsWolk12X, grijsWolk12Y, 50);
  fill(240);
  circle(witWolk1X, witWolk1Y, 40); // eerste
  circle(witWolk2X, witWolk2Y, 40);
  circle(witWolk3X, witWolk3Y, 40);
  circle(witWolk4X, witWolk4Y, 40); // tweede
  circle(witWolk5X, witWolk5Y, 40);
  circle(witWolk6X, witWolk6Y, 40);
  circle(witWolk7X, witWolk7Y, 60); // derde
  circle(witWolk8X, witWolk8Y, 60);
  circle(witWolk9X, witWolk9Y, 60);
  circle(witWolk10X, witWolk10Y, 50); // vierde
  circle(witWolk11X, witWolk11Y, 40);
  circle(witWolk12X, witWolk12Y, 50);

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

  // auto's snelheid
  autoRoodX = autoRoodX + autoRoodSpeed // snelheid van rode auto
  
  autoBlauwX = autoBlauwX + autoBlauwSpeed // snelheid blauwe auto

  autoWitX = autoWitX + autoWitSpeed // snelheid witte auto

  // auto's loop
  if ( autoRoodX > 1000){
    autoRoodX = -150
  }

  if (autoBlauwX > 1000){
    autoBlauwX = -150
  }

  if (autoWitX > 1000){
    autoWitX = -150
  }

  fill(255, 50, 50); // rood
  rect(autoRoodX, autoRoodY, 150, 40);
  rect(autoRoodX, autoRoodY - 40, 125, 40);
  fill(50, 50, 50);
  circle(autoRoodX + 25, autoRoodY+40, 50);
  circle(autoRoodX + 110, autoRoodY+40, 50);

  fill(100, 100, 255); // blauw
  rect(autoBlauwX, autoBlauwY, 150, 40);
  rect(autoBlauwX, autoBlauwY - 40, 125, 40);
  fill(50, 50, 50);
  circle(autoBlauwX +25, autoBlauwY + 40, 50);
  circle(autoBlauwX +110, autoBlauwY + 40, 50);

  fill(200, 200, 200); // wit
  rect(autoWitX, autoWitY, 150, 40);
  rect(autoWitX, autoWitY -40, 125, 40);
  fill(50, 50, 50);
  circle(autoWitX +25, autoWitY +40, 50);
  circle(autoWitX +110, autoWitY +40, 50);

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
    autoRoodSpeed = 0
    autoBlauwSpeed = 0
    autoWitSpeed = 0

  }

   if (stopLichtKleur == 2){
    fill(242, 124, 5);
    circle(915, 360, 30);
    autoRoodSpeed = 2
    autoBlauwSpeed = 2
    autoWitSpeed = 3
  }
   if (stopLichtKleur == 1){
    fill(0, 255, 0);
    circle(915, 400, 30);
    autoRoodSpeed = 3
    autoBlauwSpeed = 3
    autoWitSpeed = 6
  }

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