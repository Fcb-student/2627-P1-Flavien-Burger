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

let grijs = 0
let rood = 1
let blauw = 2

let achtergrondRood = 400

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(0,0,255); // achtergrond met kleuren voor de spelers
  strokeWeight(1);
  fill(255,0,0);
  rect(0,0,achtergrondRood,850);
// speelbord
 strokeWeight(4);
  fill(30);
  rect(150,75,500,500,30);
  fill(180);
  rect(180,105,110,110,20);
  rect(345,105,110,110,20);
  rect(510,105,110,110,20);
  rect(180,265,110,110,20);
  rect(345,265,110,110,20);
  rect(510,265,110,110,20);
  rect(180,425,110,110,20);
  rect(345,425,110,110,20);
  rect(510,425,110,110,20);
}
