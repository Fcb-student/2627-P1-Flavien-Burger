let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];

let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];

let knoppen = [];

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i = kleuren.length; i ++){
    fill(kleuren[i]);
    rect(50 + (i * 100),20,50,20);
  }
}

function draw() {
  background(220);
}
