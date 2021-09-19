// Fun return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Fun return void
function printResult(num: number): undefined { // Error: func can't not allowed to return undefined
  console.log("Result: " + num);
}

printResult(add(1, 2));

// variable allowed to undefined BUT func not
let someValue: undefined;
console.log(someValue); // undefined
