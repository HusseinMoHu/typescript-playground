interface Named {
  readonly name: string;
}
interface Greetable {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
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
