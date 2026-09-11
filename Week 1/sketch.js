function setup() {
  createCanvas(850, 650);
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

  fill(30, 70, 40); // kleding uitlijn //
  rect(580,60,60,10); // hoed // 
  rect(550,70,90,10);
  rect(630,80,10,10);
  rect(540,80,10,10);
  rect(530,90,10,10);
  rect(510,100,20,10);
  rect(490,110,20,10);
  rect(480,120,10,10);
  rect(470,130,80,10);
  rect(560,130,20,10);
  rect(520,120,10,10);
  rect(520,150,20,10);
  rect(550,240,10,10);
  rect(560,250,10,10);
  rect(550,220,10,10);
  rect(600,220,40,10);
  rect(630,190,10,10);
  rect(570,200,10,10);
  rect(580,210,20,10);
  rect(590,200,10,10);
  
  fill(0,0,0); //zwarte uitlijn //
  rect(470,140,20,10);
  rect(500,150,10,10);
  rect(510,160,10,40);
  rect(520,220,10,40);
  rect(530,260,20,10);
  rect(550,250,10,10);
  rect(560,260,60,10);
  rect(620,270,50,10);
  rect(670,260,10,20);
  rect(660,250,10,10);
  rect(540,200,10,50);
  rect(530,210,30,10);
  rect(630,240,30,10);
  rect(640,230,10,10);
  rect(620,250,10,10);
  rect(630,180,30,10);
  rect(590,190,40,10);
  rect(580,200,10,10);
  rect(580,140,10,10);
  rect(570,150,10,50);
  rect(550,190,10,30);
  rect(540,170,10,20);
  rect(560,220,10,10);
  rect(560,180,10,10);
  rect(660,170,10,10);
  rect(660,120,10,40);
  rect(660,110,20,10);
  rect(680,100,10,10);
  rect(690,70,10,30);
  rect(640,70,50,10);
  rect(630,140,30,10);

  fill(133, 87, 13); // tas //
  rect(520,160,30,10);
  rect(560,170,10,10);
  rect(580,150,10,20);
  rect(600,170,10,20);
  rect(640,140,10,10);
  rect(590,180,10,10);
  rect(610,150,10,10);
  rect(520,170,10,30);
  rect(530,190,20,10);
  rect(530,200,10,10);
  rect(640,100,10,10);
  rect(650,110,10,10);
  rect(640,190,20,10);
  rect(640,220,20,10);

  fill(255); // ogen
  rect(630,150,10,20);
  fill(105, 94, 219);
  rect(640,150,10,20);

  fill(89, 58, 9); // schoenen //
  rect(530,220,10,40);
  rect(540,250,10,10);
  rect(620,260,50,10);
  rect(630,250,30,10);


  fill(80); // grijze uitlijn //
  rect(510,150,10,10);
  rect(530,170,10,20);
  rect(550,170,10,20);
  rect(570,230,50,10);
  rect(600,160,10,10);
  
  fill(80); // zwaard uitlijn //
  rect(660,180,10,60);
  rect(670,170,20,10);
  rect(670,230,20,10);
  rect(680,180,10,50);
  rect(690,190,100,10);
  rect(690,220,100,10);
  rect(790,200,10,20);

  fill(120); // zwaard  //
  rect(670,180,10,50);
  rect(690,200,100,20);

  fill(70, 140, 8); // hoed kleur //
  rect(550,80,80,10);
  rect(540,90,70,10);
  rect(530,100,80,10);
  rect(510,110,90,10);
  rect(490,120,30,10);
  rect(530,120,70,10);
  rect(550,130,10,10);
  rect(580,130,20,10);
  rect(490,140,50,10);
  rect(560,150,10,10);
  rect(570,140,10,10);

  rect(600,200,40,20); // kleding kleur //
  rect(570,220,30,10);
  rect(560,210,20,10);
  rect(560,190,10,20);
  rect(550,230,20,10);
  rect(620,230,20,10);
  rect(560,240,70,10);
  rect(570,250,50,10);

  fill(245,211,59); // haar //
  rect(640,80,50,20);
  rect(660,100,20,10);
  rect(610,90,30,50);
  rect(600,110,10,30);
  rect(590,160,10,20);
  rect(580,180,10,10);

  fill(255,232,173); // huid //
  rect(540,140,30,10);
  rect(540,150,20,10);
  rect(550,160,20,10);
  rect(580,170,10,10);
  rect(580,190,10,10);
  rect(590,140,20,20);
  rect(610,160,20,30);
  rect(630,170,30,10);
  rect(610,140,10,10);
  rect(620,120,10,40);
  rect(630,110,20,30);
  rect(650,120,10,20);
  rect(650,100,10,10);
  rect(650,150,10,20);
  rect(620,90,20,10);
  rect(660,80,20,10);

  fill(0); // nummer //
  text("9",30,430);
  text("Nintendo switch, games", 50,430);
  rect(); // persoonlijk ding: game console //

  fill(0,0,255); // blauwe kant //
  rect(20,470,10,100);
  rect(30,460,20,120);
  rect(50,450,30,140);

  fill(255,0,0); // rode kant //
  rect(260,450,30,140);
  rect(290,460,20,120);
  rect(310,470,10,100);

  fill(0); // scherm //
  rect(80,450,180,140);
  fill(80);
  rect(90,460,160,120);
  fill(160);
  rect(100,470,140,100);

  fill(0); // knopen //
  rect(60,560,10,10); // linkwe //
  rect(60,460,10,10);
  rect(40,520,10,10,);
  rect(30,530,10,10);
  rect(40,540,10,10);
  rect(50,530,10,10);
  rect(40,480,20,20);

  rect(270,460,10,10); // rechter //
  rect(280,480,10,10);
  rect(270,490,10,10);
  rect(280,500,10,10);
  rect(290,490,10,10);
  rect(270,560,10,10);
  rect(280,530,20,20);

 }
