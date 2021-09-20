const add = (a: number, b: number, showResult: boolean, phrase: string) => {
  // if (typeof a !== "number" || typeof b !== "number") {
  //   throw new Error("Invalid inputs!");
  // }

  const result = a + b;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
};

let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(num1, num2, printResult, resultPhrase);
