// Fun return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Fun return void
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(1, 2));

let someValue; // type: any
someValue = add;

console.log(someValue(8, 8)); // type: any
