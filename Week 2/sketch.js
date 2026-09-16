function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(150, 255, 255);

  if (keyIsPressed == true) {
    if(keyCode == ENTER) {

    }
  }

  noStroke()
  fill(200,200,0,200); // zonne stralling
  circle(100,60,75);
  fill(255,255,0); // zon maken
  circle(100,60,50);

  fill(150); // bergen
  triangle(210,520,320,150,270,520);
  triangle(410,520,510,100,570,520);
  triangle(650,520,750,250,750,520);
  fill(170) // schaduw
  triangle(270,520,320,150,400,520);
  triangle(570,520,510,100,600,520);
  triangle(750,520,750,250,850,520);
// wolken
  fill(180);
  circle(30,100,40);
  circle(50,110,40);
  circle(70,90,40);
  fill(240);
  circle(40,100,40);
  circle(60,110,40);
  circle(80,90,40);

  fill(0,200,50); // grond
  rect(0,500,1000,200);
  fill(0,150,40);
  rect(0,510,1000,180);

  fill(80); // asfalt
  rect(0,520,1000,170);
  fill(230); // witte streppen
  rect(10,600,80,10,80);
  rect(120,600,80,10,80);
  rect(230,600,80,10,80);
  rect(340,600,80,10,80);
  rect(450,600,80,10,80);
  rect(560,600,80,10,80);
  rect(670,600,80,10,80);
  rect(780,600,80,10,80);
  rect(890,600,80,10,80);

  fill(); // bomen 



}
