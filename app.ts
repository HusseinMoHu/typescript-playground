let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Hussein";

if (typeof userInput === "string") {
  userName = userInput; // no error here.. bcz if-check handle unknown-type
}
