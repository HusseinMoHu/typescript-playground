const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// let favoriteActivities: any[];
// favoriteActivities = ["Sports", 1];

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Cooking"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
  // console.log(hobby.map());  !! Error: Ts knows that hobby is string can't use mapMethod
}
