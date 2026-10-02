let kleuren = ["red", "orange", "green", "blue", "pink", "yellow","purple","aqua","grey","black"];

let grootteVierkanten = [];
let grootteDrieHoek = [];
let grootteCircle = [];

function setup() {
  createCanvas(1000, 700);
  frameRate(5); 

 for (let i = 0; i < 20; i++){
 let size = int(random(10,100));
  let x = int(random(10,900));
  let y = int(random(10,650));
  let kleur = random(kleuren);
 let sq = [x, y, size, kleur];
 grootteVierkanten.push(sq);
 }

 for (let i = 0; i < 20; i++){
 let randomGetal = int(random(10,50));
 grootteDrieHoek.push(randomGetal);
 }

 for (let i = 0; i < 20; i++){
  let size = int(random(10,100));
  let x = int(random(10,900));
  let y = int(random(10,650));
  let kleur = random(kleuren);
  let C = [x,y,size, kleur];
 grootteCircle.push(C);
 }

}

function draw() {
background(220);

   
  for( let i = 0; i < grootteVierkanten.length; i++){
    
  fill(grootteVierkanten[i][3]);
  square(grootteVierkanten[i][0],grootteVierkanten[i][1],grootteVierkanten[i][2]);
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
    fill(grootteCircle[i][3]);   
  circle(grootteCircle[i][0],grootteCircle[i][1],grootteCircle[i][2]);
  }

}
