export const firstName = "John";
export const lastName = "Doe";

export function getFullName() {
  return `${firstName} ${lastName}`;
}

export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
