// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
  outPutName?: string;
}

class Person implements Greetable {
  name?: string;
  country = "Egypt";
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let hussein: Greetable;
hussein = new Person();
hussein.greet("Hi every one - I am");
console.log(hussein);
