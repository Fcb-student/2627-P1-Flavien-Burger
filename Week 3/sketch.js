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

function setup() {
  createCanvas(1000, 850);
}

function draw() {
  background(0,0,255); // achtergrond met kleuren voor de spelers
  fill(255,0,0);
  rect(0,0,500,850);
// speelbord
  fill(60);
  rect(150,100,700,600,40);
  fill(140);
  rect(180,120,80,80,10);
}
