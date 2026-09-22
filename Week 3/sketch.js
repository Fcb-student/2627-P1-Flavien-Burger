// variabel speler en bord
let speler1 = 1
let Speler2 = 2
let vak1 = 0
let vak2 = 0
let vak3 = 0
let vak4 = 0
let vak5 = 0
let vak6 = 0
let vak7 = 0
let vak8 = 0
let vak9 = 0

let achtergrondRood = 535

function setup() {
  createCanvas(1000, 850);
}

function draw() {
  background(0,0,255); // achtergrond met kleuren voor de spelers
  strokeWeight(1);
  fill(255,0,0);
  rect(0,0,achtergrondRood,850);
// speelbord
 strokeWeight(4);
  fill(30);
  rect(250,175,550,500,30);
  fill(180);
  rect(300,205,110,110,20);
  rect(480,205,110,110,20);
  rect(660,205,110,110,20);
  rect(300,365,110,110,20);
  rect(480,365,110,110,20);
  rect(660,365,110,110,20);
  rect(300,525,110,110,20);
  rect(480,525,110,110,20);
  rect(660,525,110,110,20);
}
