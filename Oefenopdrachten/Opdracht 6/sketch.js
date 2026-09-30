function setup() {
  createCanvas(500, 800);
}

function draw() {
  background(220);
  fill(0);
  text("1.",20,15);
  text("2.",20,100);
  text("3.",20,190);
  text("4.",20,250);
  text("5.",120,15);
  text("6.",120,100);
  text("7.",120,190);
  text("8.",120,280);
  text("9.",240,15);

  let X = 30
  let Y = 25

  let kleuren = ["red", "green", "blue", "purple", "yellow"]

// opdracht 1
  for (let i = 0; i < 5; i++){
    fill(kleuren[i])
    text(kleuren[i],X,Y + i * 15);
  }

  // opdracht 2//
   kleuren.push("red");
   kleuren.shift(0);

  for (let i = 0; i < 5; i++){
    fill(kleuren[i])
    text(kleuren[i],X,Y + 80 + i * 15);
  }

   // opdracht 3//
   kleuren.splice(1,2);

  for (let i = 0; i < 5; i++){
    fill(kleuren[i])
    text(kleuren[i],X,Y + 170 + i * 15);
  }
}
