enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
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

// any type
let x: any;
x = 10;
x = true;
x = ["string", 1];

let y: any[];
// y = 1;               !! Error
// y "string";          !! Error
y = [1, "t", 55, true];

/** any types
 * use it ONLY when u have a variable with value u don't know it's type
 * and us if-block to make checks.
 * otherwise -> try to avoid using {any} type as possible as u can
 */
