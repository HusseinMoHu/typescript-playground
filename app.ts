// You can change default values to any values you need
enum Role {
  ADMIN = 100,
  READ_ONLY = "READ",
  AUTHOR = 300,
}

let person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
