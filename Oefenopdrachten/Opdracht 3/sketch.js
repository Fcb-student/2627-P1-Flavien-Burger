let score = 65

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
if (score > 90 && score == 100) {
  fill(0,255,0);
  text("uistekend",20,80);
}

if (score > 70 && score <= 89) {
  fill(255,255,0);
  text("Goed gedaan!",20,100);
}

if (score > 50 && score <= 69) {
  fill(255,120,0)
  text("voldoende",20,120);
}

if (score >= 0 && score <=49) {
  fill(255,0,0);
  text("onvoldoende",20,140);
}

}
