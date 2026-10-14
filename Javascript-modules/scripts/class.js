export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`Hello ${this.name}! my name is ${name}`);
  }
}
