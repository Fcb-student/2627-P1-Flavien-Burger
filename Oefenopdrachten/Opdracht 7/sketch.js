function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  let arrperson = [
    ["jan","joahn", "karel", "mia"],
    ["jaap", "joep", "fienne", "karin"],
    ["flavien", "chloe", "estelle", "danny"],
    ["coen", "joris", "kees", "martin"]
  ];

  for(let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++) {
      rect(i * 50 + 25, j * 50 + 25,40,40);
    }
  }
}
