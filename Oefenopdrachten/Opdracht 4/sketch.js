let Score = 0

let stopLichtKleur = 1 

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
 fill(0);
 text("1. Houd B in om een blokje te laten verschijnen.",20,20);
 text("2. Druk op spatie om het getal op 0 te zetten.",20,120);
 text("3. Druk op enter om van rood -> groen -> oranje te gaan.",20,240);
 text("4. Beweeg de eightball met WASD of de pijltjestoetsen.",360,20);

 if(keyCode === 66){
  fill(255);
  rect(20,40,60,60);
 }

 // stoplicht
  fill(100);
  rect(40, 400, 20, 100);
  rect(30, 300, 40, 100);
  fill(255, 0, 0, 100);
  circle(50, 320, 25);
  fill(242, 124, 5, 100);
  circle(50, 350, 25);
  fill(0, 255, 0, 100);
  circle(50, 380, 25);
    
  if (stopLichtKleur == 0){
    fill(255, 0, 0);
    circle(50, 320, 25);
    autoroodspeed = 0

  }

   if (stopLichtKleur == 2){
    fill(242, 124, 5);
    circle(50, 350, 25);
    autoroodspeed = 3
  }
   if (stopLichtKleur == 1){
    fill(0, 255, 0);
    circle(50, 380, 25);
    autoroodspeed = 3
  }

}

function keyPressed()
{
  if (keyCode === 13) {
      
    stopLichtKleur = stopLichtKleur + 1;

    if(stopLichtKleur > 2)
    {
        stopLichtKleur = 0
    }
   
    }
}