enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// By default admin=0, READ_ONLY=1, AUTHOR= 2

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
