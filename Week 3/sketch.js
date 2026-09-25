// variabel speler en bord
let speler = 1;
let spelerRood = 1;
let SpelerBlauw = 2;
let vak1 = 0;
let vak2 = 0;
let vak3 = 0;
let vak4 = 0;
let vak5 = 0;
let vak6 = 0;
let vak7 = 0;
let vak8 = 0;
let vak9 = 0;

let grijs = 0; // kleuren vakjes
let Rood = [255, 0, 0];
let blauw = [0, 0, 255];

let achtergrondRood = 400;

let grijzeVlakX = 180;
let grijzeVlakY = 105;
let grijzeVlakW = 110;
let grijzeVlakH = 110;

let gameWin = false;
let gameDraw = false;

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(0, 0, 255); // achtergrond met kleuren voor de spelers
  stroke(0);
  strokeWeight(1);

  if (speler == 1) {
    achtergrondRood = 600;
  }
  if (speler == 2) {
    achtergrondRood = 200;
  }

  fill(255, 0, 0);
  rect(0, 0, achtergrondRood, 850);

  // speelbord
  strokeWeight(4); // vakjes voor input
  fill(30);
  rect(150, 75, 500, 500, 30);
  // grijze vlakjes waarbij als de muis bovenop staat dat het van kleur veranderd
  // het gaat van linksboven naar recht onder
  if (
    mouseX > grijzeVlakX &&
    mouseX < grijzeVlakX + grijzeVlakW &&
    mouseY > grijzeVlakY &&
    mouseY < grijzeVlakY + grijzeVlakH
  ) {
    fill(120); // het vakje wordt donker de muis erop zit
  } else {
    fill(180); // blijft hetzelfde kleur zonder muis
  }
  rect(grijzeVlakX, grijzeVlakY, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX + 165 &&
    mouseX < grijzeVlakX + 165 + grijzeVlakW &&
    mouseY > grijzeVlakY &&
    mouseY < grijzeVlakY + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX + 165, grijzeVlakY, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX + 330 &&
    mouseX < grijzeVlakX + 330 + grijzeVlakW &&
    mouseY > grijzeVlakY &&
    mouseY < grijzeVlakY + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX + 330, grijzeVlakY, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX &&
    mouseX < grijzeVlakX + grijzeVlakW &&
    mouseY > grijzeVlakY + 160 &&
    mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX, grijzeVlakY + 160, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX + 165 &&
    mouseX < grijzeVlakX + 165 + grijzeVlakW &&
    mouseY > grijzeVlakY + 160 &&
    mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX + 165, grijzeVlakY + 160, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX + 330 &&
    mouseX < grijzeVlakX + 330 + grijzeVlakW &&
    mouseY > grijzeVlakY + 160 &&
    mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX + 330, grijzeVlakY + 160, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX &&
    mouseX < grijzeVlakX + grijzeVlakW &&
    mouseY > grijzeVlakY + 320 &&
    mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX, grijzeVlakY + 320, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX + 165 &&
    mouseX < grijzeVlakX + 165 + grijzeVlakW &&
    mouseY > grijzeVlakY + 320 &&
    mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX + 165, grijzeVlakY + 320, grijzeVlakW, grijzeVlakH, 20);

  if (
    mouseX > grijzeVlakX + 330 &&
    mouseX < grijzeVlakX + 330 + grijzeVlakW &&
    mouseY > grijzeVlakY + 320 &&
    mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    fill(120);
  } else {
    fill(180);
  }
  rect(grijzeVlakX + 330, grijzeVlakY + 320, grijzeVlakW, grijzeVlakH, 20);

  if (vak1 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX, grijzeVlakY, 110, 110, 20);
  } else if (vak1 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX, grijzeVlakY, 110, 110, 20);
  }

  if (vak2 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX + 165, grijzeVlakY, 110, 110, 20);
  } else if (vak2 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX + 165, grijzeVlakY, 110, 110, 20);
  }

  if (vak3 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX + 330, grijzeVlakY, 110, 110, 20);
  } else if (vak3 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX + 330, grijzeVlakY, 110, 110, 20);
  }

  if (vak4 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX, grijzeVlakY + 160, 110, 110, 20);
  } else if (vak4 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX, grijzeVlakY + 160, 110, 110, 20);
  }

  if (vak5 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX + 165, grijzeVlakY + 160, 110, 110, 20);
  } else if (vak5 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX + 165, grijzeVlakY + 160, 110, 110, 20);
  }

  if (vak6 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX + 330, grijzeVlakY + 160, 110, 110, 20);
  } else if (vak6 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX + 330, grijzeVlakY + 160, 110, 110, 20);
  }

  if (vak7 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX, grijzeVlakY + 320, 110, 110, 20);
  } else if (vak7 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX, grijzeVlakY + 320, 110, 110, 20);
  }

  if (vak8 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX + 165, grijzeVlakY + 320, 110, 110, 20);
  } else if (vak8 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX + 165, grijzeVlakY + 320, 110, 110, 20);
  }

  if (vak9 == 1) {
    fill(255, 0, 0);
    rect(grijzeVlakX + 330, grijzeVlakY + 320, 110, 110, 20);
  } else if (vak9 == 2) {
    fill(0, 0, 255);
    rect(grijzeVlakX + 330, grijzeVlakY + 320, 110, 110, 20);
  }

  checkForWin();

  showResetButton();
}

function showResetButton() {
  if (gameDraw == true) {
    fill(0);
    rect(300, 600, 200, 30);
    fill(0,255,0);
    text("reset", 375, 615);
  }
    if (gameWin == true) {
    fill(0);
    rect(300, 600, 200, 30);
    fill(0,255,0);
    strokeWeight(0,5);
    text("reset", 375, 615);
  }
}

function checkForWin() {
  // als drie vakje sop een rij staat dan komt er winnaar met een lijn over de vakjes
  if (vak1 == vak2 && vak2 == vak3 && vak1 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(200, 160, 600, 160);
  } else if (vak4 == vak5 && vak5 == vak6 && vak4 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(200, 320, 600, 320);
  } else if (vak7 == vak8 && vak8 == vak9 && vak7 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(200, 480, 600, 480);
  } else if (vak1 == vak4 && vak4 == vak7 && vak1 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(230, 120, 230, 510);
  } else if (vak2 == vak5 && vak5 == vak8 && vak2 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(400, 120, 400, 510);
  } else if (vak3 == vak6 && vak6 == vak9 && vak3 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(560, 120, 560, 510);
  } else if (vak1 == vak5 && vak5 == vak9 && vak1 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(200, 120, 590, 510);
  } else if (vak7 == vak5 && vak5 == vak3 && vak7 != 0) {
    fill(0, 255, 0);
    text("Winnaar", 375, 95);
    gameWin = true;
    stroke(0, 255, 0);
    line(590, 120, 200, 510);
  }
  else if(vak1 != vak2 && vak2 != vak3 && vak1 != 0 && vak2 != 0 && vak3 != 0 ){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
  else if(vak4 != vak5 && vak5 != vak6 && vak4 != 0 && vak5 != 0 && vak6 != 0){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
  else if(vak7 != vak8 && vak8 != vak9 && vak7 != 0 && vak8 != 0 && vak9 != 0){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
 else if(vak1 != vak4 && vak4 != vak7 && vak1 != 0 && vak4 != 0 && vak7 != 0){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
 else if(vak2 != vak5 && vak5 != vak8 && vak2 != 0 && vak5 != 0 && vak8 != 0){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
 else if(vak3 != vak6 && vak6 != vak9 && vak3 != 0 && vak6 != 0 && vak9 != 0){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
 else if(vak1 != vak5 && vak5!= vak9 && vak1 != 0 && vak5 != 0 && vak9 != 0){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
 else if(vak7 != vak5 && vak5 != vak3 && vak7 != 0 && vak5 != 0 && vak3 != 0){
    fill(0,255,0);
    text("draw", 375,96)
    gameDraw = true;
  }
}

function mouseClicked() {
  // als de game een draw is
  if (gameDraw == true) {
    fill(100);
    rect(300, 600, 200, 30);

    if (
      mouseX > 300 &&
      mouseX < 300 + 200 &&
      mouseY > 600 &&
      mouseY < 600 + 30
    ) {
      resetGame();
    }
    return; //springt weg uit de functie, alles hieronder wordt niet meer uitgevoerd.
  }

  // als de game gewonnen is
  if (gameWin == true) {
    fill(100);
    rect(300, 600, 200, 30);

    if (
      mouseX > 300 &&
      mouseX < 300 + 200 &&
      mouseY > 600 &&
      mouseY < 600 + 30
    ) {
      resetGame();
    }
    return; //springt weg uit de functie, alles hieronder wordt niet meer uitgevoerd.
  }

  // de vakje veranderd door het click van een muis en de speler verwisseld
  if (
    mouseX > grijzeVlakX &&
    mouseX < grijzeVlakX + grijzeVlakW &&
    mouseY > grijzeVlakY &&
    mouseY < grijzeVlakY + grijzeVlakH
  ) {
    vak1 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX + 165 &&
    mouseX < grijzeVlakX + 165 + grijzeVlakW &&
    mouseY > grijzeVlakY &&
    mouseY < grijzeVlakY + grijzeVlakH
  ) {
    vak2 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX + 330 &&
    mouseX < grijzeVlakX + 330 + grijzeVlakW &&
    mouseY > grijzeVlakY &&
    mouseY < grijzeVlakY + grijzeVlakH
  ) {
    vak3 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX &&
    mouseX < grijzeVlakX + grijzeVlakW &&
    mouseY > grijzeVlakY + 160 &&
    mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    vak4 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX + 165 &&
    mouseX < grijzeVlakX + 165 + grijzeVlakW &&
    mouseY > grijzeVlakY + 160 &&
    mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    vak5 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX + 330 &&
    mouseX < grijzeVlakX + 330 + grijzeVlakW &&
    mouseY > grijzeVlakY + 160 &&
    mouseY < grijzeVlakY + 160 + grijzeVlakH
  ) {
    vak6 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX &&
    mouseX < grijzeVlakX + grijzeVlakW &&
    mouseY > grijzeVlakY + 320 &&
    mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    vak7 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX + 165 &&
    mouseX < grijzeVlakX + 165 + grijzeVlakW &&
    mouseY > grijzeVlakY + 320 &&
    mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    vak8 = speler;
    changeTurn();
  }

  if (
    mouseX > grijzeVlakX + 330 &&
    mouseX < grijzeVlakX + 330 + grijzeVlakW &&
    mouseY > grijzeVlakY + 320 &&
    mouseY < grijzeVlakY + 320 + grijzeVlakH
  ) {
    vak9 = speler;
    changeTurn();
  }
}

function changeTurn() {
  // verwisseld de speler per click
  speler = speler + 1;
  if (speler > 2) {
    speler = 1;
  }
}

function resetGame() {
  vak1 = 0;
  vak2 = 0;
  vak3 = 0;
  vak4 = 0;
  vak5 = 0;
  vak6 = 0;
  vak7 = 0;
  vak8 = 0;
  vak9 = 0;
  gameWin = false;
  gameDraw = false;
  speler = 1;
}
