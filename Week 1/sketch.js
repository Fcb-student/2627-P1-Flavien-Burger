function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(220);

  stroke(0,5);
  fill(0);
  text("1", 30, 40);// nummer 1
  text("Flavien Burger", 40, 40); // eigen nssm

  noStroke(0);
  text("2", 30, 60); // nummer 2
  fill(250, 0 ,0); // Nederlandse vlag met kleuren en vorm
  rect(50,50,90,20);
  fill(255, 255, 255);
  rect(50,70,90,20);
  fill(0, 0, 255);
  rect(50,90,90,20);
}
