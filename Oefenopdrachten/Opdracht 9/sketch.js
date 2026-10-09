let score = 0;
let ballen = [];
let kleuren = ["red","green", "yellow", "pink", "aqua", "orange","white","PowderBlue", "coral", "orchid", "lightgray", "ivory", "springGreen", "lime", "indigo", "purple", "crimson", "royalblue", "salmon", "rosybrown"]

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 20; i++){
  let bal = {x: random(width), y: random(height), size: random(10,50), xspeed: random(-5, 5) , yspeed: random(-5, 5)}
  ballen.push (bal);
  }
}

function draw() {
  background(30,40,80);
  for ( let i = 0; i < ballen.length; i++){
    let bal = ballen[i];
    fill(kleuren[i]);
    circle(bal.x,bal.y,bal.size );
  }
}

function mousepressed(){
  
}
