class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
    greet(): void {
    console.log("Hello, my name is " + this.name);
  }
}

let p1 = new Person("Anant", 21);
p1.greet();