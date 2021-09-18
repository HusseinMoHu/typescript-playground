enum Role {
  ADMIN = 3,
  READ_ONLY,
  AUTHOR,
}

// By default admin=0, READ_ONLY=1, AUTHOR= 2
// you can change those values by assign the first one, so
// NOW admin=3, READ_ONLY=4, AUTHOR= 5

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
