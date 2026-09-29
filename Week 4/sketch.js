let kleuren =["red", "orange", "green"];

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  for(let i = 0; i < 3; i++){
    fill(kleuren[i])
    circle(35,35 + (35 * i),30);

  }

  let index = 0;
  while(index < 5){
    fill(200);
  rect(60 + (index * 50), 50, 50, 50);
  index++
  }

}
