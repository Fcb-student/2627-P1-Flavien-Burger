function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill(100);
  tekenHuis(100,150,80);
  tekenCirkel();
  tekenRect();
  tekenStraal();
}
// maakt meerdere huizen
function tekenHuis (x,y,size){
   for (i = 0; i < 3; i++){
  fill(100);
  square(x + (150 * i),y,size);
  triangle(100 + (150 * i),150,140 + (150 * i),100,180 + (150 * i),150);
  rect(110 + (150 * i),180,20,50);
  rect(150 + (150 * i),170,20,20);

 }
}


function tekenCirkel(){

}

function tekenRechtHoek(){
  
}
