function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(200);
  strokeWeight(4);

  fill(255); // wit
  rect(20,20,450,300);
  rect(70,120,140,70);
  rect(100,20,160,30);
  rect(260,230,100,90);
  rect(260,100,70,50);

  fill(0,0,0); // zwart
  rect(210,50,50,100);
  rect(110,190,100,80);
  rect(320,150,80,80);
  rect(330,50,70,50);

  fill(255,255,0);// geel
  rect(20,120,50,70);
  rect(210,220,50,100);
  rect(360,230,110,50);
  rect(260,20,140,30);

  fill(0,0,255); // blauw
  rect(20,20,80,30);
  rect(20,270,50,50);
  rect(70,190,40,80);
  rect(210,150,110,80);
  rect(400,100,70,130);

  fill(255,0,0); // rood
  rect(110,270,100,50);
  rect(20,50,190,70);
  rect(360,280,110,40);
  rect(400,20,70,80);
}
