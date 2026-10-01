let kleuren =["red", "orange", "green", "blue", "pink", "yellow"];


let grootteVierkanten = [];

function setup() {
  createCanvas(1000, 700);

 for (let i = 0; i < 10; i++){
 let randomGetal = int(random(10,100));
 console.log(randomGetal);
 grootteVierkanten.push(randomGetal);
 }

  console.log(grootteVierkanten);

  let sqX = int(random(10,400));
  let sqY = int(random(10,600));
  for( let i = 0; i < grootteVierkanten.length; i++){
    square(sqX,sqY,grootteVierkanten[i]);
  }

}

function draw() {
  background(220);

}
