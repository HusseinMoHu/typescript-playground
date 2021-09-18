// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

let person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  // role: ADMIN
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === /* ADMIN */ Role.ADMIN) {
  console.log("is admin");
}
