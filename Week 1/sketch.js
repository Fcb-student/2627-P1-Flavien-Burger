function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(220);

  stroke(0,5);
  fill(0);
  text("1", 30, 40);// nummer 1 //
  text("Flavien Burger", 50, 40); // eigen naam //

  noStroke();
  text("2", 30, 60); // nummer 2
  fill(250, 0 ,0); // Nederlandse vlag , rood, wit, blauw en vorm //
  rect(50,50,90,20);
  fill(255, 255, 255);
  rect(50,70,90,20);
  fill(0, 0, 255);
  rect(50,90,90,20);

  fill(0); // nummer en schaakbord met rand //
  stroke(0);
  strokeWeight(0,5);
  text("3", 30, 140);
  strokeWeight(2);
  fill(255); // witte oppervlakte //
  rect(50,140,120,120);
  fill(0,0,0); // zwarte platen //
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
  rect(190,40,60,130); // grijze pilaar //
  rect(205,150, 30, 110);
  fill(255,0,0); // kleuren van de stoplichten //
  circle(220,65,30); // stoplichten //
  fill(255,130,0);
  circle(220,105,30);
  fill(0,255,0);
  circle(220,145,30);

  stroke(0);
  fill(0);
  text("6", 170, 300); // nummer //
  strokeWeight(4); // dikte rand //
  fill(255); // witte oppervlakte en vierkand met ronde rand //
  rect(190,320, 80,80,10);
  strokeWeight(15);
  point(210,340); // punten van dobbelsteen //
  point(230,360);
  point(250,380);

  strokeWeight(0,5);
  fill(0);
  text("7", 280, 40); // nummer en naam //
  text("Mario", 300,40);

  fill(250,0,0); 
  rect(320,60,60,10); // pet //
  rect(310,70,100,10);
  rect(310,130,70,30); // shirt //
  rect(300,140,100,10);
  rect(290,150,120,10);
  rect(310,160,80,10);

  fill(200,90,70); // haar
  rect(310,80,30,30);
  rect(300,90,20,30);

  rect(290,210,40,10); // linkerschoen //
  rect(300,200,30,10);
  rect(370,210,40,10); // rechterschoen //
  rect(370,200,30,10);


  fill(245, 188, 144); // gezicht en handen
  rect(310,90,10,20);
  rect(320,110,80,20);
  rect(340,80,30,10);
  rect(330,90,80,10);
  rect(340,100,80,10);

  rect(290,160,20,30);
  rect(310,170,10,10);
  rect(380,170,10,10);
  rect(390,160,20,30);

  fill(0); // snor en ogen // 
  rect(370,110,40,10);
  rect(380,100,10,10);
  rect(370,80,10,20);

  fill(0,0,255); // broek //
  rect(330,130,10,70);
  rect(330,150,30,40);
  rect(360,140,10,60);
  rect(320,160,60,30);
  rect(310,180,20,20);
  rect(370,180,20,20);

  fill(255,255,0); // knopen //
  rect(330,160,10,10);
  rect(360,160,10,10);

  fill(0,0,0);
  text("8",440,40);
  text("Link",460,40); // nummer en naam //
  fill(44, 92, 50); // hoed uitlijn //
  fill(65, 138, 74); // hoed //
}
