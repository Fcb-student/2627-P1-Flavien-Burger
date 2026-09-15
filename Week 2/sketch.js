function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(150, 255, 255);

  noStroke()
  fill(200,200,0,200); // zonne stralling
  circle(100,60,75);
  fill(255,255,0); // zon maken
  circle(100,60,50);

  fill(0,200,50); // grond
  rect(0,400,800,200);
  fill(0,150,40);
  rect(0,420,800,180);
  fill(160);
  rect(0,430,800,170);

}
