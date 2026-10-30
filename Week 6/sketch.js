let livingRoomImg;
let bedRoomImg;
let kitchenImg;
let bathRoomImg;
let gardenImg;

let backgroundImage


let scoreHealt = 100;
let scoreHealtMax = 100;

let scoreEnergy = 100;
let scoreEnergytMax = 100;

let scoreHappiness = 100;
let scoreHappinessMax = 100;

let scoreStomach = 100;
let scoreStomachMax = 100;

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
  rect(50 + (200 * i),530, 130 , 50, 20);
  fill(255);
  text(buttonNameLocation[i], 100 + ( 200 * i),660);
  text(buttonNameActivity[i], 100 + (200 * i), 560);
  virtualPet();
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
  if (scoreHealt >= 100){
    scoreHealt = 100
  }
  // over tijd gaat energy omlaag
  scoreEnergy = scoreEnergy - 0.01
  if (scoreEnergy <= 0){
  scoreEnergy = 0
  }
  if (scoreEnergy >= 100){
    scoreEnergy = 100
  }
  // over tijd gaat stomach leeg
  scoreStomach = scoreStomach - 0.03
  if (scoreStomach <= 0){
  scoreStomach = 0
  }
  if (scoreStomach >= 100){
    scoreStomach = 100
  }
  // hapiness omlaag
  scoreHappiness = scoreHappiness - 0.01
  if (scoreHappiness <= 0){
  scoreHappiness = 0
  }
  if (scoreHappiness >= 100){
    scoreHappiness = 100
  }
  // op basis van de andere stats gaat happiness sneller omlaag
  // laag stomach
  if ( scoreHealt <= 50){
    scoreHappiness = scoreHappiness - 0.03
  }

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
  // de buttons veranderen de achtergrond
  // button woonkamer
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonW &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonH
  ) {
    backgroundImage = livingRoomImg
  }
  
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
  // acties voor de huisdier
  // om te aaien.
  if ( 
    mouseX > 50 &&
    mouseX < 50 + 130 &&
    mouseY > 530 &&
    mouseY < 530 + 50
  ){
    scoreHappiness = scoreHappiness + 10;
  }
 // om te slapen
  if ( 
    mouseX > (50 + 200) &&
    mouseX < (50 + 200) + 130 &&
    mouseY > 530 &&
    mouseY < 530 + 50
  ){
    scoreEnergy = scoreEnergy + 40;
  }
 // om te eten
  if ( 
    mouseX > (50 + 400) &&
    mouseX < (50 + 400) + 130 &&
    mouseY > 530 &&
    mouseY < 530 + 50
  ){
    scoreStomach = scoreStomach + 30
    scoreEnergy = scoreEnergy + 10;
  }
 // om te wassen
  if ( 
    mouseX > (50 + 600) &&
    mouseX < (50 + 600) + 130 &&
    mouseY > 530 &&
    mouseY < 530 + 50
  ){
    scoreHealt = scoreHealt + 30;
    scoreHappiness = scoreHappiness - 5;
  }
 // om te spelen
  if ( 
    mouseX > (50 + 800) &&
    mouseX < (50 + 800) + 130 &&
    mouseY > 530 &&
    mouseY < 530 + 50
  ){
    scoreHappiness = scoreHappiness + 30;
    scoreEnergy = scoreEnergy - 20;
    scoreStomach = scoreStomach - 20;
  }
}

function mouseClickedLivingRoom(){
  // de buttons hebben verschillende functionies
 
}