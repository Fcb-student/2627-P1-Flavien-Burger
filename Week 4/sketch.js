let kleuren = [ // kleuren vormen
  "red",
  "orange",
  "green",
  "blue",
  "pink",
  "yellow",
  "purple",
  "aqua",
  "grey",
  "black",
  "white",
];
// kleuren achtergrond
let kleurenAchtergrond = ["indigo", "coral", "greenYellow","navy", "aquamarine", "plum", "gold", "silver", "royalBlue"];

// de variablen die de vormen krijgen
let grootteVierkanten = [];
let grootteDrieHoek = [];
let grootteCircle = [];

function setup() {
  createCanvas(1000, 700);
 // de art word dan gegenereerd
  generateArt();

}

function draw() {

// de vorm van de square en de kleur
  for (let i = 0; i < grootteVierkanten.length; i++) {
    fill(grootteVierkanten[i][3]);
    square(
      grootteVierkanten[i][0],
      grootteVierkanten[i][1],
      grootteVierkanten[i][2],
    );
  }
// de vorm van de cirkel en de kleur
  for (let i = 0; i < grootteCircle.length; i++) {
    fill(grootteCircle[i][3]);
    circle(grootteCircle[i][0], grootteCircle[i][1], grootteCircle[i][2]);
  }
// de de vorm van de driehoek en de kleur
  for (let i = 0; i < grootteDrieHoek.length; i++) {
    fill(grootteDrieHoek[i][6]);
    triangle(
      grootteDrieHoek[i][0],
      grootteDrieHoek[i][1],
      grootteDrieHoek[i][2],
      grootteDrieHoek[i][3],
      grootteDrieHoek[i][4],
      grootteDrieHoek[i][5]
    );
  }
}

function keyPressed() {
  // de art word opnieuw gemaakt als ENTER word ingedrukt
  if (keyCode === 13) {
    generateArt();
  }
}
// functie om dan de art te maken
function generateArt() {
// achtergrond veranderd elke keer
  background(random(kleurenAchtergrond));

  grootteVierkanten = [];
  grootteDrieHoek = [];
  grootteCircle = [];
// variabelen begin en grootte square
  for (let i = 0; i < 20; i++) {
    let size = int(random(10, 100));
    let x = int(random(10, 900));
    let y = int(random(10, 650));
    let kleur = random(kleuren);
    let sq = [x, y, size, kleur];
    grootteVierkanten.push(sq);
  }
// variabelen punten van driehoekn
  for (let i = 0; i < 5; i++) {
    let x1 = int(random(100, 900));
    let y1 = int(random(100, 650));
    let x2 = int(random(100, 900));
    let y2 = int(random(100, 600));
    let x3 = int(random(100, 900));
    let y3 = int(random(100, 650));
    let kleur = random(kleuren);
    let dh = [x1, y1, x2, y2, x3, y3, kleur];
    grootteDrieHoek.push(dh);
  }
// variabelen begin van circel
  for (let i = 0; i < 20; i++) {
    let size = int(random(10, 100));
    let x = int(random(10, 900));
    let y = int(random(10, 650));
    let kleur = random(kleuren);
    let C = [x, y, size, kleur];
    grootteCircle.push(C);
  }
}
