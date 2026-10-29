let livingRoomImg;
let bedRoomImg;
let kitchenImg;
let bathRoomImg;
let gardenImg;

let backgroundImage


let scoreHealt = 100;
let scoreEnergy = 100;
let scoreHappiness = 100;
let scoreStomach = 100;

let tamagotchiAlive = true

let buttonX = 50;
let buttonY = 630;
let buttonW = 130;
let buttonH = 50;

let buttonNameLocation = [ "Livingroom", "Bedroom", "Kitchen", "Bathroom", "Garden"]
let buttonNameActivity = ["pet", "sleep", "eat", "clean", "play"]

function setup() {
  backgroundImage = livingRoomImg;
  createCanvas(1000, 700);
}

function preload() {
  livingRoomImg = loadImage("essentials/foto/tamagotchi woonkamer.jpg");
  bedRoomImg = loadImage("essentials/foto/tamagotchi slaapkamer.jpg");
  kitchenImg = loadImage("essentials/foto/tamagotchi keuken.jpg");
  bathRoomImg = loadImage("essentials/foto/tamagotchi badkamer.jpg");
  gardenImg = loadImage("essentials/foto/images.jpg");

}

function draw() {
  background(220);
  // plaatjes van achtergrond
  image(backgroundImage, 0, 0, 1000, 800);

  // balken van waar de score van de stats staan
  fill(0,255,0);
  rect(60,20,100,25); // health
  fill(255,255,0);
  rect(300,20,100,25); //  energy
  fill(255,0,0);
  rect(540,20,100,25);// stomach
  fill(245, 66, 218);
  rect(780,20,100,25);// happiness
  statsChange();

  for(let i = 0; i < 5; i ++){
  fill(100);
  rect(buttonX + ( 200 * i),buttonY,buttonW,buttonH, 20);
  fill(255);
  text(buttonNameLocation[i],90 + ( 200 * i),660);
  }
  
}

function statsChange(){
// de begin van de stats
  for(let i = 0; i <4; i ++){
  fill(0);
  text(round(scoreHealt),100,40);
  text(round(scoreEnergy),340,40);
  text(round(scoreStomach),580,40);
  text(round(scoreHappiness),820,40);
  }

   // over tijd gaan stats omlaag
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
  // hapiness omlaag
  scoreHappiness = scoreHappiness - 0.01
  if (scoreHappiness <= 0){
  scoreHappiness = 0
  }
  // op basis van de andere stats gaat happiness sneller omlaag
  // laag stomach
  if ( scoreHappiness)

  if (scoreEnergy == 0 && scoreHappiness == 0 && scoreHealt == 0 && scoreStomach == 0){
    tamagotchiAlive == false
    if( tamagotchiAlive == false){
    fill(0);
    text("Game Over",500,150)
    }
  }
}

function virtualPet(){

}

function mouseClicked() {
  // geeft de pet aandacht
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
    
  }
  // de buttons veranderen de achtergrond
 // button voor slaap kamer
  if (
    mouseX > buttonX + 200 &&
    mouseX < buttonX + 200 + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
    backgroundImage = bedRoomImg;
  }
 // button voor keuken
  if (
    mouseX > buttonX + 400 &&
    mouseX < buttonX + 400 + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
     backgroundImage = kitchenImg;
  }
 // button voor hadkamer
  if (
    mouseX > buttonX + 600 &&
    mouseX < buttonX + 600 + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
     backgroundImage = bathRoomImg;
  }
 // button voor tuin
  if (
    mouseX > buttonX + 800 &&
    mouseX < buttonX + 800 + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
    backgroundImage = gardenImg;
  }
}

function mouseClickedLivingRoom(){
  // de buttons hebben verschillende functionies
 
}