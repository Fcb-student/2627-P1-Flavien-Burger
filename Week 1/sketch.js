function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(220);

  stroke(0,5);
  fill(0);
  text("1", 30, 40);// nummer 1
  text("Flavien Burger", 50, 40); // eigen naam

  noStroke();
  text("2", 30, 60); // nummer 2
  fill(250, 0 ,0); // Nederlandse vlag met kleuren en vorm
  rect(50,50,90,20);
  fill(255, 255, 255);
  rect(50,70,90,20);
  fill(0, 0, 255);
  rect(50,90,90,20);

  fill(0); // nummer en schaakbord met rand
  stroke(0);
  strokeWeight(0,5);
  text("3", 30, 140);
  strokeWeight(2);
  fill(255);
  rect(50,140,120,120);
  fill(0,0,0);
  rect(50,140,40,40);
  rect(50,220,40,40);
  rect(90,180,40,40);
  rect(130,140,40,40);
  rect(130,220,40,40);

  strokeWeight(0,5);
  text("4", 30,280);
  strokeWeight(4);
  fill(220);
  triangle(100,270,55,320,145,320);
  rect(60,320,80,80);


  strokeWeight(0,5)
  fill(0);
  text("5", 170, 40);
  noStroke();
  fill(140);
  rect(190,40,60,130);
  rect(205,150, 30, 110);
  fill(255,0,0);
  circle(220,65,30);
  fill(255,130,0);
  circle(220,105,30);
  fill(0,255,0);
  circle(220,145,30);

  stroke(0);
  fill(0);
  text("6", 170, 300);
  strokeWeight(4);
  fill(255);
  rect(190,320, 80,80,10);
  strokeWeight(15);
  point(210,340);
  point(230,360);
  point(250,380);

  strokeWeight(0,5);
  fill(0);
  text("7", 280, 40);

}
