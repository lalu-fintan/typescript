"use strict";
// interface- it a pre defined strict rule of  object method,which means,If we create any object what are the properties we need to pass on that object,
// for example If we create on interface and create one object depends on that interface ,but we add extra one property in that object,It will throw the error,because already we defined we need  these properties only in this object
const employee = {
    name: "laluprasath",
    employeeID: 1,
    getName() {
        return this.name;
    },
};
// employee.name="naveen"
console.log(employee);
// -------------------------------------------------------------------------------------------------------------------
// use the interface in class
class Fresher {
    constructor() {
        this.name = "laluprasath";
        this.employeeID = 1;
    }
    getName() {
        return this.name;
    }
}
const employee1 = new Fresher();
console.log(employee1);
// add the method
class Fresher1 {
    constructor() {
        this.name = "laluprasath";
        this.employeeID = 2;
    }
    getName() {
        return this.name;
    }
}
const employee2 = new Fresher1();
console.log(employee2.getName());
//# sourceMappingURL=basic.1.js.map