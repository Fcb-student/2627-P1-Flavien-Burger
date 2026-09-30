let randomColors;
let averageNummers;

function setup() {
  createCanvas(500, 800);

 // opdracht 8 //
 randomColors = [];

 //for (let i = 0; i < 10; i++){
  //let r = floor( random(0,256));
  // let g = floor( random(0,256));
 //   let b = floor( random(0,256));
//  randomColors.push(colors(r,g,b));
 //}//

}

function draw() {
  background(220);
  fill(0);
  text("1.",20,15);
  text("2.",20,100);
  text("3.",20,190);
  text("4.",20,250);
  text("5.",120,15);
  text("6.",120,100);
  text("7.",120,190);
  text("8.",120,280);
  text("9.",240,15);

  let X = 30
  let Y = 25

  let kleuren = ["red", "green", "blue", "purple", "yellow"]

// opdracht 1 //
  for (let i = 0; i < 5; i++){
    fill(kleuren[i])
    text(kleuren[i],X,Y + i * 15);
  }

  // opdracht 2 //
   kleuren.push("red");
   kleuren.shift(0);

  for (let i = 0; i < 5; i++){
    fill(kleuren[i])
    text(kleuren[i],X,Y + 80 + i * 15);
  }

   // opdracht 3 //
   kleuren.splice(1,2);

  for (let i = 0; i < 5; i++){
    fill(kleuren[i])
    text(kleuren[i],X,Y + 170 + i * 15);
  }

  // opdracht 4 
  let getallen = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300]
  for ( let i = 0; i = getallen.length; i++){
    text(getallen,)
  }


  // opdracht 5 //



  // opdracht 6 //
 // let woord = ("Overheidsfinancieringstekort.");
 // let aantal = 0;
 // for(let i = 0; i < woord.length; i++){

 // }

  // opdracht 7 //
  // let kleuren7 = ["red", "green", "blue", "purple", "yellow"];

 //  kleuren7 = kleuren7.sort

  // X = 140;
 //  Y = 190;
  // for(let i = 0; i < kleuren7.length; i++){}
}
