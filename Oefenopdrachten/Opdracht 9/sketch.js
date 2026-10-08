let score = 0;
let ballen = [];
let kleuren = ["red","green", "yellow", "pink", "aqua", "orange"]

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++){
  let bal = {x: random(width), y: random(height), size: random(10,50) }
  ballen.push (bal);
  }
}
function draw() {
  background(30,40,80);
  fill(kleuren[i]);
  circle(x, y, size);
  for (i = 0; i < ball.length; i ++){
    circle(x, y, size)
  }
}
