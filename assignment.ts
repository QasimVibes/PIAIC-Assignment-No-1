console.log("Hey Abu Hurairah, I have started learning TYPESCRIPT");
let myName: string = "Qasim Razzaq";
console.log("My name is " + myName);

let num1: number = 54;
let num2: number = 25;
let num3: number = 64;
let num4: number = 2;
let num5: number = 46;
let num6: number = 32;
let num7: number = 95;
let num8: number = 26;
let num9: number = 93;
let num10: number = 77;

let sum: number =
  num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
console.log("Sum: " + sum);

let subtract: number = num7 - num4;
console.log("Subtraction: " + subtract);

let multiply: number =
  num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10;
console.log("Multiplication: " + multiply);

let division: number = num10 / num8;
console.log("Division: " + division);

// Operator Precedence
// Multiplication: "*"
// Division: "/"
// Addition: "+"
// Subtraction: "-"
let precedence: number = num6 / num2 + num1 * num4 - num9;
console.log("Operator Precedence Result: " + precedence);
