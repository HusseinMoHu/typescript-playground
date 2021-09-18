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

person.role.push("admin");
// person.role[1] = 10; !! Error: due to tuple

console.log(person);
