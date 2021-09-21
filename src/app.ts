interface Named {
  readonly name: string;
}

// interface can inherit from more than interface
// BUT class can't inherit from more than class
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let hussein: Greetable;
hussein = new Person("Hussein", 24);
hussein.greet("Hi every one - I am");
console.log(hussein);
