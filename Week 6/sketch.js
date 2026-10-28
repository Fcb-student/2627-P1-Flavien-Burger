let Livingroomimg;
let Bedroomimg;
let kitchenimg;
let Bathroomimg;
let Gardenimg;


let scoreHealt = 100;
let scoreEnergy = 100;
let scoreHappiness = 100;
let scoreStomach = 100;

let tamagotchiAlive = true

let buttonX = 50;
let buttonY = 730;
let buttonW = 130;
let buttonH = 50;

let buttonName1 = [ "Pet", "Bedroom", "Kitchen", "Bathroom", "Garden"]

function setup() {
  
  createCanvas(1000, 800);
}

function preload() {
  woonkamerImg = loadImage("essentials/foto/tamagotchi woonkamer.jpg");

}

function afterLoad(){
  Bedroomimg = loadImage("essentials/foto/tamagotchi slaapkamer.jpg");
  kitchenimg = loadImage("essentials/foto/tamagotchi keuken.jpg");
  Bathroomimg = loadImage("essentials/foto/tamagotchi baadkamer.jpg");
  Gardenimg = loadImage("essentials/foto/images.jpg");
}

function draw() {
  background(220);
  image(woonkamerImg, 0, 0, 1000, 800);
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
  text(buttonName1[i],85 + ( 200 * i),760);
  }

 mouseClickedLivingRoom();
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

function mouseClickedLivingRoom(){
  // de buttond hebben verschillende functionies
  if ( tamagotchiAlive == true){
       
   if(
    mouseX > buttonX &&
    mouseX < buttonX + buttonWW &&
    mouseY > buttonY  &&
    mouseY < buttonYY + buttonHH
   ) {
      
   }

   if (mouseX > buttonX + 200 &&
    mouseX < buttonX + 200 + buttonWW &&
    mouseY > buttonY  &&
    mouseY < buttonYY + buttonHH
   ){
    afterLoad(Bedroomimg);
   }

   if (mouseX > buttonX + 400 &&
    mouseX < buttonX + 400 + buttonWW &&
    mouseY > buttonY  &&
    mouseY < buttonYY + buttonHH
   ){
    afterLoad(kitchenimg);
   }
   if (mouseX > buttonX + 600 &&
    mouseX < buttonX + 600 + buttonWW &&
    mouseY > buttonY  &&
    mouseY < buttonYY + buttonHH
   ){
    afterLoad(Bathroomimg);
   }
   if (mouseX > buttonX + 800 &&
    mouseX < buttonX + 800 + buttonWW &&
    mouseY > buttonY  &&
    mouseY < buttonYY + buttonHH
   ){
    afterLoad(Gardenimg);
   }

  }
}