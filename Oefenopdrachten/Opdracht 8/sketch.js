function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill(100);
  tekenHuis(100,150,80);
  tekenHuis(200,150,80);
  tekenHuis(150,250,80);
  tekenCirkel(100,100,20);
  tekenRechtHoek(50,25,75,60);
  tekenLijn(400,200,420,300);
  tekenTekst("Hallo",500,350,50);
}
// maakt meerdere huizen
function tekenHuis (x,y,size){
  fill(255);
  square(x,y,size);
  triangle(x,y, 40+ x, y - 50,80 + x,y);
  rect(10 + x, 30 + y,20,50);
  rect(50 + x, 20 + y,20,20);

}


function tekenCirkel(x,y,straal){
  fill(200,0,0);
  circle(x,y,straal);

}

function tekenRechtHoek(x, y, w, h){
  fill(0,0,200);
  rect(x, y, w, h);
}

function tekenLijn(x1, y1, x2, y2){
  fill(200);
  line(x1, y1, x2, y2);
}

function tekenTekst(tekst, x, y){
  fill(200,100,100);
  text(tekst,x,y);
}