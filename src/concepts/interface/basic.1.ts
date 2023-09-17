// interface- it a pre defined strict rule of  object method,which means,If we create any object what are the properties we need to pass on that object,
// for example If we create on interface and create one object depends on that interface ,but we add extra one property in that object,It will throw the error,because already we defined we need  these properties only in this object

// * If we use read only keyword in interface property,we don't have a access to change the value.like this ,// employee.name="naveen"

// * type and interface both are same , but type is not sutable for class component, Interfaec is the only way to use pre defined strict rule of  object in the class

// * we can't  use the union ininterface, but we can use type.
interface User {
  readonly name: string;
  employeeID: number;
  getName(): string;
}

const employee: User = {
  name: "laluprasath",
  employeeID: 1,
  getName(): string {
    return this.name;
  },
};

// employee.name="naveen"

console.log(employee);

// -------------------------------------------------------------------------------------------------------------------

// use the interface in class

class Fresher implements User {
  name = "laluprasath";
  employeeID = 1;
  getName(): string {
    return this.name;
  }
}

const employee1 = new Fresher();
console.log(employee1);

// add the method

class Fresher1 implements User {
  name = "laluprasath";
  employeeID = 2;
  getName(): string {
    return this.name;
  }
}

const employee2: User = new Fresher1();
console.log(employee2.getName());
