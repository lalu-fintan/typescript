"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array
let names = ["lalu", "vijay", "manivel"];
console.log(names);
// object
// if I declare ? before colon ,It's optional data,means the data is not mantitory
let userDetails = {
    name: "laluprasath",
    age: 21,
    isMajor: true,
};
// array of object
// let employeeData: { name: string; age: number; isMajor: boolean }[] = [
//   { name: "laluprasath", age: 21, isMajor: true },
//   { name: "naveen", age: 22, isMajor: true },
// ];
// type aliasys -means  we call these type of object date in everywhere , If we want this ,just Import it.
let employeeData = [
    { name: "laluprasath", age: 21, isMajor: true },
    { name: "naveen", age: 22, isMajor: true },
];
console.log(employeeData);
// union (|) - means to merge the multiple data types,which means I want this or this type of data
// ex: string | null
let employeeDatas = [
    { name: "laluprasath", age: 21, isMajor: true },
    { name: "naveen", age: 22, isMajor: true },
];
console.log(employeeData);
// type assertion
let employee = employeeDatas; //1 method
// let employee = employeeDatas as Employee[]; //2nd method *
if (employee[0].address) {
    console.log(employee[0].address);
}
// non-null or prefix (!) - means If you know defanatly it have a value , so don't declare it's null or undefined
if (employee[0].address) {
    console.log(employee[0].address);
}
//# sourceMappingURL=reference_type.js.map