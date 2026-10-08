let score = 0;
let ballen = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++){
  let bal = {x: random(width), y: random(height), size: random(10,50) }
  ballen.push (bal);
  }
}
function draw() {
  background(30,40,80);
}
