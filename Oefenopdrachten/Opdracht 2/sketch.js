let x = 100; // variabel voor wat x is //

let greeting = "Hello world"; // variabel wat greetinh zegt //

let a = 20; // a is 20 //
let b = 10; // b is 10
let optellen = a + b; // wat de optellen doet //
let aftrekken = a - b; // wat de aftrekken doe //
let vermenigvuldigen = a * b; // wat de vermenigvuldigen doet //
let delen = a / b;  // eat de delen doet/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  text(x,20,20); // positie //

  text(greeting,20,60); // positie //

  text("optellen: ",20, 80); // positie //
  text(optellen,70,80);
  text("afrekkenen: ", 20,100);
  text(aftrekken,80,100);
  text("vermenigvuldigen: ",20,120);
  text(vermenigvuldigen,120,120)
  text("delen: ", 20, 140);
  text(delen,55,140);
}
