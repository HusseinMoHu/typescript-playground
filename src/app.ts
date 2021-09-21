interface Person {
  name: string;
  age: number;

  great(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Hussein",
  age: 24,
  great(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.great("Hi there - I am");
