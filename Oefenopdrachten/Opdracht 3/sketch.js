let score = 65 // mijn score

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  // conditie voor uitstekend
if (score > 90 && score <= 100) {
  fill(0,255,0);
  text("uistekend",20,80);
}
// conditie voor goed gedaan
if (score > 70 && score <= 89) {
  fill(255,255,0);
  text("Goed gedaan!",20,100);
}
// conditie voor voldoende
if (score > 50 && score <= 69) {
  fill(255,120,0)
  text("voldoende",20,120);
}
// conditie voor onvoldoende
if (score >= 0 && score <=49) {
  fill(255,0,0);
  text("onvoldoende",20,140);
}

}
