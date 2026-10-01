function setup() {
  createCanvas(1100, 800);
}

function draw() {
  background(220);
  strokeWeight(1);

  fill(0); // kleur nummers
  text("1.", 20,15); // positie van de plaatjes
  text("2.", 20,105);
  text("3.", 80,105);
  text("4.", 80,205);
  text("5.", 540,20);
  text("6.", 350,105);
  text("7.", 625,105);

  for (let i = 0; i < 10; i++) { // 1
    if ( i == 6){
    fill("blue");
  } else {
    fill("White")
  }
  rect(10 + i * 40, 20, 40, 40); 
  }

  for(let i = 0; i < 5; i++) { // 2
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
  
  let x = 80;
  let y = 115;
  for(let i = 0; i < 4; i++){ // 3

    if (i == 0){
      fill(0,0,0);
    } else if (i == 1){
      fill(0,80,0);
    } else if ( i == 2){
      fill(0,160,0);
    } else if ( i == 3){
      fill(0,220,0);
    }
    let w = 25 + (25 * i);
    rect(x, y, w,50);
    x = x + w;
  }
  let x1 = 80
  let y1 = 235
  for (let i = 0; i < 4; i++){ // 4
    if (i == 0){
      fill(0,0,255);
    } else if (i == 1){
      fill(0,0,170);
    } else if ( i == 2){
      fill(0,0,100);
    } else if ( i == 3){
      fill(0,0,0);
    }
    let w1 = 25 + (25 * i);
    let h1 = 50 + (25 * i);
    rect(x1,y1,w1,h1)
    x1 = x1 + w1
  } 

  for(let i = 0; i < 6; i++){ // 5
    fill(255)
    strokeWeight(0 + 2 * i)
    circle(560 + 40 * i, 40 , 30);
  }
  let KleurRW = ["Red", "White","Red","White","Red","White","Red","White","Red", "White"]
  for( let i = 0; i < 11; i ++){ // 6
   strokeWeight(1);
   fill(KleurRW[i]);
   circle(480,230,250 - (25 * i));
  }


}
