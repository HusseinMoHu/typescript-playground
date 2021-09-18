let person: {
  name: string;
  age: 30;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin"); // push has exception for no fuckin' reason!
// person.role[1] = 10; !! Error: due to tuple

person.role = [4, "admin"]; // this work fine. and respect tuple

console.log(person);
