let img;

let scoreHealt = 100;
let scoreEnergy = 100;
let scoreHappiness = 100;
let scoreStomach = 100;

function setup() {
  
  createCanvas(1000, 800);
}

function preload() {
  img = loadImage("foto's/tamagotchi woonkamer.jpg");

}

function draw() {
  background(220);
  image(img, 0, 0, 1000, 800);
  // balken van waar de score van de stats staan
  fill(0,255,0);
  rect(60,20,100,25); // health
  fill(255,255,0);
  rect(300,20,100,25); //  energy
  fill(255,0,0);
  rect(540,20,100,25);// stomach
  fill(245, 66, 218);
  rect(780,20,100,25);// happiness

  // over tijd gaat healt omlaag
  scoreHealt = scoreHealt - 0.01
  if (scoreHealt <= 0){
  scoreHealt = 0
  }
  // over tijd gaat energy omlaag
  scoreEnergy = scoreEnergy - 0.01
  if (scoreEnergy <= 0){
  scoreEnergy = 0
  }
  // over tijd gaat stomach leeg
  scoreStomach = scoreStomach - 0.03
  if (scoreStomach <= 0){
  scoreStomach = 0
  }
  // over tijd gaat hapiness omlaag
  scoreHappiness = scoreHappiness - 0.01
  if (scoreHappiness <= 0){
  scoreHappiness = 0
  }
  // op basis van de andere stats gaat happiness sneller omlaag
  if ( scoreHappiness)
   
  for(let i = 0; i <4; i ++){
  fill(0);
  text(round(scoreHealt),100,40);
  text(round(scoreEnergy),340,40);
  text(round(scoreStomach),580,40);
  text(round(scoreHappiness),820,40);
  }

}

function virtualPet(){

}

function createButton(){

}