"use strict";
// class Person {
//   // private id: number;
//   id: number;
//   name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }
// const user1 = new Person(1, "lalu");
// console.log({ user1 });
// always constructor will execute first in the class
// if you are declare private the property ,we can't get the data outside of the class,defaultly it was in public,
// like this ,  private id: number;
// -----------------------------------------------------------------------------------------------------------------------------------------------
// use function inthe class
// class Person {
//   id: number;
//   name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   register() {
//     return `${this.name} has been registered`;
//   }
// }
// const user1 = new Person(1, "lalu");
// console.log(user1.register());
// ----------------------------------------------------------------------------------------------------------------------------
// use interface in class
// interface PersonType {
//   id: number;
//   name: string;
//   register(): string;
// }
// class PersonDetails implements PersonType {
//   id: number;
//   name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   register() {
//     return `${this.name} has been registered`;
//   }
// }
//# sourceMappingURL=class.js.map