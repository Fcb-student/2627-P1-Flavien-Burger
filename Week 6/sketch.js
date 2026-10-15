let img;

let scoreHealt = 100;
let scoreEnergy = 100;
let scoreHappiness = 100;
let scorestomach = 100;

function setup() {
  
  createCanvas(1000, 800);
}

function preload() {
  img = loadImage("assets/tamagotchi woonkamer.jpg");

}

function draw() {
  background(220);
  image(img, 0, 0, 1000, 800);
  // balken van waar de score van de stats staan
  fill(0,255,0);
  rect(60,20,100,25);
  fill(255,255,0);
  rect(300,20,100,25);
  fill(255,0,0);
  rect(540,20,100,25);
  fill(245, 66, 218);
  rect(780,20,100,25);

  fill(0);
  text(scoreHealt,100,39);
  text
  text
  text

}

function virtualPet(){

}
