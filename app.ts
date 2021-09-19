// unknown-type is better choice over any-type
// union-type is better than unknown-type incase u expect specific values  like-> number | string
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Hussein";

if (typeof userInput === "string") {
  userName = userInput;
}
