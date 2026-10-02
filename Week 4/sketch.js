let kleuren = ["red", "orange", "green", "blue", "pink", "yellow"];

let grootteVierkanten = [];
let grootteDrieHoek = [];
let grootteCircle = [];

function setup() {
  createCanvas(1000, 700);
  frameRate(5); 

 for (let i = 0; i < 10; i++){
 let randomGetal = int(random(10,100));
 grootteVierkanten.push(randomGetal);
 }

 for (let i = 0; i < 10; i++){
 let randomGetal = int(random(10,50));
 grootteDrieHoek.push(randomGetal);
 }

 for (let i = 0; i < 10; i++){
 let randomGetal = int(random(10,100));
 grootteCircle.push(randomGetal);
 }

}

function draw() {
background(220);

   
  for( let i = 0; i < grootteVierkanten.length; i++){
    //fill(kleuren[i]);
  let sqX = int(random(10,900));
  let sqY = int(random(10,650));
   
  square(sqX,sqY,grootteVierkanten[i]);
  }

  //for( let i = 0; i < grootteDrieHoek.length; i++){
  //let dhX1 = int(random(10,100));
  //let dhY1 = int(random(10,600));
  //let dhX2 = int(random(10,400));
  //let dhY2 = int(random(10,100));
  //let dhX3 = int(random(10,700));
  // let dhY3 = int(random(10,600));

  //triangle(dhX1,dhY1,dhX2,dhY2,dhX3,dhY3,grootteDrieHoek[i]);
  //}
  
 for( let i = 0; i < grootteCircle.length; i++){
    //fill(kleuren[i]);
  let CX = int(random(10,900));
  let CY = int(random(10,650));
   
  circle(CX,CY,grootteCircle[i]);
  }

}
