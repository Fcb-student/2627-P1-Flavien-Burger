function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill(100);
  tekenHuis();
  tekenCirkel();
  tekenRect();
  tekenStraal();
}
// maakt meerdere huizen
function tekenHuis (x,y){
  for(let i = 0; i < 3; i++){
  rect(100 + i * 150,200,100,100);
  triangle(150 + i * 150,100,200 + i * 150,200,100 + i * 150,200);
  rect(125 + i * 150, 250, 25, 50);
  rect(170 + i * 150, 230,25,25);
  }
}
// maakt een cirkel
function tekenCirkel(x,y,straal){
  circle(x,y,straal);
}
tekenCirkel(300,70,50);
// maakt een recthoek
function tekenRect(){
  rect(400,20,100,50);
}
// maakt een straal
function tekenStraal(){
  line(520,20,600,200);
}
// functie om waarde toe te voegen
function addition(a, b) {
}
// functie om waarde te delen
function divide(){

}
// functie om waarde te vermenigvuldigen
function multiply(){

}
// functie om waarde af te nemen
function takeAway(){

}
