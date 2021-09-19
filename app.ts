// Fun return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Fun return void
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(1, 2));

let someValue: (a: number, b: number) => number; // func must have 2 params type-number and must return number
someValue = add;
// someValue = printResult; // Error!! printResult has no params and it's void-type not return number-type

console.log(someValue(8, 8));
