// Fun return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Fun return void
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(1, 2));

// Func-types & callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(20, 10, (result) => {
  console.log(result);
});
