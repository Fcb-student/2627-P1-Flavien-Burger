let uitkomst1 = optellen(3, 4);
console.log(uitkomst1);

let uitkomst2 = delen(6, 3);
console.log(uitkomst2);

let uitkomst3 = vermenigvuldigen(10, 5);
console.log(uitkomst3);

let uitkomst4 = afnemen(6 ,3);
console.log(uitkomst4);

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  tekenHuis(100,150,80);
  tekenHuis(200,150,80);
  tekenHuis(150,250,80);
  tekenCirkel(100,100,20);
  tekenRechtHoek(50,25,75,60);
  tekenLijn(400,200,420,300);
  tekenTekst("Hallo",500,350,20,[200,100,100]);
  optellen();
  delen();
  vermenigvuldigen();
}
// maakt meerdere huizen
function tekenHuis (x,y,size){
  fill(255);
  strokeWeight(1);
  square(x,y,size);
  triangle(x,y, 40+ x, y - 50,80 + x,y);
  rect(10 + x, 30 + y,20,50);
  rect(50 + x, 20 + y,20,20);
  
}
// maakt een rode cirkel
function tekenCirkel(x,y,straal){
  fill(200,0,0);
  circle(x,y,straal);

}
// maakt een blauw rechthoek
function tekenRechtHoek(x, y, w, h){
  fill(0,0,200);
  rect(x, y, w, h);
}
// maakt een groene lijn
function tekenLijn(x1, y1, x2, y2){
  strokeWeight(10);
  line(x1, y1, x2, y2);
}

function tekenTekst(tekst, x, y, tS,c){
  fill(c);
  textSize(tS);
  text(tekst,x,y);
}

function optellen(a, b){
  return a + b;

}

function delen(c, d){
  return c / d
}

function vermenigvuldigen(e, f){
  return e * f
}

function afnemen(g, h){
  return g - h
}