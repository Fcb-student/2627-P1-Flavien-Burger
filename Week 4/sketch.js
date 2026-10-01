let kleuren =["red", "orange", "green", "blue", "pink", "yellow"];

let grootteVierkanten = [];
let grootteDrieHoek = [];

function setup() {
  createCanvas(1000, 700);
  frameRate(5); 

 for (let i = 0; i < 10; i++){
 let randomGetal = int(random(10,100));
 console.log(randomGetal);
 grootteVierkanten.push(randomGetal);
 }

 for (let i = 0; i < 10; i++){
 let randomGetal = int(random(10,100));
 console.log(randomGetal);
 grootteDrieHoek.push(randomGetal);
 }


}

function draw() {
  background(220);

   
   for( let i = 0; i < grootteVierkanten.length; i++){
   let sqX = int(random(10,400));
   let sqY = int(random(10,600));
   
    square(sqX,sqY,grootteVierkanten[i]);
  }
  

   for( let i = 0; i < grootteDrieHoek.length; i++){
   let dhX1 = int(random(10,100));
   let dhY1 = int(random(10,600));
   let dhX2 = int(random(10,400));
   let dhY2 = int(random(10,100));
   let dhX3 = int(random(10,700));
   let dhY3 = int(random(10,600));

   
    triangle(dhX1,dhY1,dhX2,dhY2,dhX3,dhY3,grootteDrieHoek[i]);
  }
  
}
