function setup() {
  createCanvas(1100, 800);
}

function draw() {
  background(220);

  fill(0); // kleur nummers
  text("1.", 20,15); // positie van de plaatjes
  text("2.", 20,105);
  text("3.", 80,105);
  text("4.", 80,205);
  text("5.", 540,20);
  text("6.", 350,105);
  text("7.", 625,105);

  for (let i = 0; i < 10; i++) {
    if ( i == 6){
    fill("blue");
  } else {
    fill("White")
  }
  rect(10 + i * 40, 20, 40, 40); 
  }

  for(let i = 0; i < 5; i++) {
    if ( i == 0){
      fill(0);
    } else if ( i ==1){
      fill(55);
    } else if (i ==2){
      fill(110);
    } else if ( i ==3){
      fill(165);
    } else if ( i ==4){
      fill(220);
    }
    rect(20,115 + (40 * i),40,40);
  }

  for(let i = 0; i < 4; i++){
    if ( i ==0){
      fill(0,0,0);
    } else if (i == 1){
      fill(0,80,0);
    } else if ( i == 2){
      fill(0,140,0);
    } else if ( i == 3){
      fill(0,200,0);
    }
    rect(80,115,25,50);
  }

}
