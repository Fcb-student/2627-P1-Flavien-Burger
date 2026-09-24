// variabel speler en bord
let speler = 1
let vak1 = 0
let vak2 = 0
let vak3 = 0
let vak4 = 0
let vak5 = 0
let vak6 = 0
let vak7 = 0
let vak8 = 0
let vak9 = 0

let grijs = 0 // kleuren vakjes
let rood = 1
let blauw = 2

let achtergrondRood = 400

let grijzeVlakX = 180
let grijzeVlakY = 105
let grijzeVlakW = 110
let grijzeVlakH = 110


function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(0,0,255); // achtergrond met kleuren voor de spelers
  strokeWeight(1);
  fill(255,0,0);
  rect(0,0,achtergrondRood,850);
// speelbord
 strokeWeight(4); // vakjes voor input
  fill(30);
  rect(150,75,500,500,30);
// grijze vlakjes waarbij als de muis bovenop staat dat het van kleur veranderd
// het gaat van linksboven naar recht onder
    if (
    mouseX > grijzeVlakX && mouseX < grijzeVlakX + grijzeVlakW && 
    mouseY > grijzeVlakY && mouseY < grijzeVlakY + grijzeVlakH
  ) {
    fill(120);  // het vakje wordt donker de muis erop zit
  } else {
    fill(180); // blijft hetzelfde kleur zonder muis
  }
   rect(grijzeVlakX,grijzeVlakY,grijzeVlakW,grijzeVlakH,20);

    if (
    mouseX > grijzeVlakX + 165 && mouseX < grijzeVlakX + 165 + grijzeVlakW && 
    mouseY > grijzeVlakY && mouseY < grijzeVlakY + grijzeVlakH
  ) {
    fill(120);  
  } else {
    fill(180);
  }
  rect(grijzeVlakX +165,grijzeVlakY,grijzeVlakW,grijzeVlakH,20);

  if (
    mouseX > grijzeVlakX + 330 && mouseX < grijzeVlakX + 330 + grijzeVlakW && 
    mouseY > grijzeVlakY && mouseY < grijzeVlakY + grijzeVlakH
  ) {
    fill(120);  
  } else {
    fill(180);
  }
  rect(grijzeVlakX +330,grijzeVlakY,grijzeVlakW,grijzeVlakH,20);

  if (
    mouseX > grijzeVlakX && mouseX < grijzeVlakX + grijzeVlakW && 
    mouseY > grijzeVlakY + 160&& mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    fill(120); 
  } else {
    fill(180);
  }
   rect(grijzeVlakX,grijzeVlakY +160,grijzeVlakW,grijzeVlakH,20);

    if (
    mouseX > grijzeVlakX + 165 && mouseX < grijzeVlakX + 165+ grijzeVlakW && 
    mouseY > grijzeVlakY + 160 && mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    fill(120); 
  } else {
    fill(180);
  }
   rect(grijzeVlakX + 165,grijzeVlakY +160,grijzeVlakW,grijzeVlakH,20);

   if (
    mouseX > grijzeVlakX + 330 && mouseX < grijzeVlakX + 330 + grijzeVlakW && 
    mouseY > grijzeVlakY + 160 && mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
   rect(grijzeVlakX + 330,grijzeVlakY +160,grijzeVlakW,grijzeVlakH,20);

   if (
    mouseX > grijzeVlakX && mouseX < grijzeVlakX + grijzeVlakW && 
    mouseY > grijzeVlakY + 320 && mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    fill(120); 
  } else {
    fill(180);
  }
   rect(grijzeVlakX,grijzeVlakY +320,grijzeVlakW,grijzeVlakH,20);

   if (
    mouseX > grijzeVlakX + 165 && mouseX < grijzeVlakX + 165 + grijzeVlakW && 
    mouseY > grijzeVlakY + 320 && mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    fill(120);  
  } else {
    fill(180); 
  }
   rect(grijzeVlakX + 165,grijzeVlakY +320,grijzeVlakW,grijzeVlakH,20);

   if (
    mouseX > grijzeVlakX + 330 && mouseX < grijzeVlakX + 330 + grijzeVlakW && 
    mouseY > grijzeVlakY + 320 && mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    fill(120);   
  } else {
    fill(180);
  }
   rect(grijzeVlakX + 330,grijzeVlakY +320,grijzeVlakW,grijzeVlakH,20);

}

function mousePressed(){ // de vakje veranderd door het click van een muis
	
  if ( speler = 1){
    fill(255,0,0);
    rect(180,105,110,110);
  }
   if (speler = 2) {
    fill(0,0,255);
    rect(180,105,110,110);
   }
    if (
    mouseX > grijzeVlakX && mouseX < grijzeVlakX + grijzeVlakW && 
    mouseY > grijzeVlakY && mouseY < grijzeVlakY + grijzeVlakH
  ){
    fill(255,0,0);
    rect(180,105,110,110);
  }
    
   }
