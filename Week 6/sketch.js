// variabelen voor soorten archtergronden
let livingRoomImg;
let bedRoomImg;
let kitchenImg;
let bathRoomImg;
let gardenImg;
// variabel voor de achtergrond
let backgroundImage

// de variabelen van de stats
let scoreHealt = 100;
let scoreEnergy = 100;
let scoreHappiness = 100;
let scoreStomach = 100;
// de stand van de hyuisdier
let tamagotchiAlive = true
// coordinaten van de button
let buttonX = 50;
let buttonY = 630;
let buttonW = 130;
let buttonH = 50;
// array voor de namen van buttons
let buttonNameLocation = [ "Livingroom", "Bedroom", "Kitchen", "Bathroom", "Garden"]
let buttonNameActivity = ["pet", "sleep", "eat", "clean", "play"]

function setup() {
  backgroundImage = livingRoomImg;
  createCanvas(1000, 700);
}
// alles staat al in bestand
function preload() {
  livingRoomImg = loadImage("essentials/foto/tamagotchi woonkamer.jpg");
  bedRoomImg = loadImage("essentials/foto/tamagotchi slaapkamer.jpg");
  kitchenImg = loadImage("essentials/foto/tamagotchi keuken.jpg");
  bathRoomImg = loadImage("essentials/foto/tamagotchi badkamer.jpg");
  gardenImg = loadImage("essentials/foto/garden.jpg");

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
  // de buttons maken 5 naast elkaar
  for(let i = 0; i < 5; i ++){
  fill(100);
  rect(buttonX + ( 200 * i),buttonY,buttonW,buttonH, 20);
  fill(255);
  text(buttonNameLocation[i], 100 + ( 200 * i),660);
  virtualPet();
  }
// per kamer komt een button voor een activiteit
// woonkamer pets
  if ( backgroundImage == livingRoomImg){
    fill(100)
    rect(50,530,130,50,20);
    fill(255);
    text(buttonNameActivity[0], 100, 560);
  }
  // slaapkamer slapen
  if ( backgroundImage == bedRoomImg){
    fill(100)
    rect(250,530,130,50,20);
    fill(255);
    text(buttonNameActivity[1], 300, 560);
  }
  // keuken eten
  if ( backgroundImage == kitchenImg){
    fill(100)
    rect(450,530,130,50,20);
    fill(255);
    text(buttonNameActivity[2], 500, 560);
  }
  // badkamer schoonmaken
  if ( backgroundImage == bathRoomImg){
    fill(100)
    rect(650,530,130,50,20);
    fill(255);
    text(buttonNameActivity[3], 700, 560);
  }
  // tuin spelen
  if ( backgroundImage == gardenImg){
    fill(100)
    rect(850,530,130,50,20);
    fill(255);
    text(buttonNameActivity[4], 900, 560);
  }
 // stand van huisdier bij stats
 // blij
  if ( scoreEnergy >= 85 && scoreHappiness >= 85 && scoreHealt >= 85 && scoreStomach >= 85){
  
  }
  // tevreden
}

function statsChange(){
// de begin van de stats
// locatie
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
  } // grens van healt
  if (scoreHealt >= 100){
    scoreHealt = 100
  }
  if ( scoreStomach <= 40){
    scoreHealt = scoreHealt - 0.2
  }
  // over tijd gaat energy omlaag
  scoreEnergy = scoreEnergy - 0.01
  if (scoreEnergy <= 0){
  scoreEnergy = 0
  }// grens van energie
  if (scoreEnergy >= 100){
    scoreEnergy = 100
  }
  // over tijd gaat stomach leeg
  scoreStomach = scoreStomach - 0.03
  if (scoreStomach <= 0){
  scoreStomach = 0
  } // grens van stomach
  if (scoreStomach >= 100){
    scoreStomach = 100
  }
  // hapiness omlaag
  scoreHappiness = scoreHappiness - 0.01
  if (scoreHappiness <= 0){
  scoreHappiness = 0
  } 
  // grens van happines
  if (scoreHappiness >= 100){
    scoreHappiness = 100
  }
  // op basis van de andere stats gaat happiness sneller omlaag
  // laag stomach
  if ( scoreHealt <= 50){
    scoreHappiness = scoreHappiness - 0.03
  }
}
// de huisdier zal dan door draw gemaakt worden
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
  // acties voor de huisdier die de stast veranderen
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
    scoreHealt = scoreHealt + 20;
    scoreHappiness = scoreHappiness - 5;
  }
 // om te spelen
  if ( 
    mouseX > (50 + 800) &&
    mouseX < (50 + 800) + 130 &&
    mouseY > 530 &&
    mouseY < 530 + 50
  ){ // de stats die veranderen
    scoreHappiness = scoreHappiness + 30;
    scoreEnergy = scoreEnergy - 20;
    scoreStomach = scoreStomach - 20;
    scoreHealt = scoreHealt - 15;
  }

  if (
    mouseX > 500 &&
    mouseX < 500 + 100 &&
    mouseY > 300 &&
    mouseY < 300 + 50
  ) { // zou een reset maken
    resetGame();
  }

  // een game over zou komen als stats 0 zijn
  if (scoreEnergy == 0 && scoreHappiness == 0 && scoreHealt == 0 && scoreStomach == 0){
    tamagotchiAlive == false
    if( tamagotchiAlive == false){
      fill(100);
      rect(500,300,100,50);
      fill(0);
      text("Game Over",500,200);
      fill(255);
      text("reset",550,525);
    }
    return
  }
}

function resetGame() { 
  // wat precies reset wordt
  scoreEnergy = 100;
  scoreHappiness = 100;
  scoreHealt = 100;
  scoreStomach = 100;
  backgroundImage = livingRoomImg;
  tamagotchiAlive =  true
}