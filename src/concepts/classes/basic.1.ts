class Employee {
  name: string = "laluprasath";

  printName() {
    console.log(this.name);
  }
}

// interface User {
//   readonly name: string;
//   employeeID: number;
//   getName(): string;
// }

// class Fresher implements User {
//   name = "laluprasath";
//   employeeID = 2;
//   getName(): string {
//     return this.name;
//   }
// }

// const employee1: User = new Fresher();
// console.log(employee1.getName());
