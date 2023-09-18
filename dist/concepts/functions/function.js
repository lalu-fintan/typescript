"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "laluprasath",
    age: 21,
    isMajor: true,
};
// 1. normal function with parameter passing
// * void -means It will not return anything
function printPersonName1(name, age) {
    console.log(name, age);
}
printPersonName1("lalu", 21);
//--------------------------------------------------------------------------------------------------------------------------------
// 2.function with paramters and declare the default value for that parameter
// * if we pass the default value as a parameter, then wherever you want just call the function declare the argument undefined, then it will take default value automatically.
// * but we need to pass the data order based,otherwise it will throw error.
function printPersonName2(name = "lalu", age) {
    console.log(name, age);
}
printPersonName2(undefined, 21); //lalu,21
// --------------------------------------------------------------------------------------------------------------------------------=-
// 3.optional parameter
// * If we  decalre ?, Its optional , we  don't need to pass the argument for that params.
// * And onemore thing If you pass the optionl params,it Should be last , otherwise It thow error
function printPersonName3(name = "lalu", age, isMajor) {
    console.log(name, age);
}
printPersonName3(undefined, 21); //lalu,21
// --------------------------------------------------------------------------------------------------------------------------------
// assign the out type
const user = {
    firstName: "laluprasath",
    lastName: "G",
    age: 21,
    isMajor: true,
};
// If we declare the type in union ,ex:string|null,but in params we declare string, so It will throw error
// * 1.if We want to avoid this type of error to to pass the params string|null.or
// * 2.type assertion ex: getFullName1(user.firstName as string, user.lastName as string), but this method  should be use Only you know argument type  otherwise use first one.
function getFullName(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    return fullName;
}
// getFullName(user.firstName, user.lastName); // thow error
function getFullName1(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    return fullName;
}
getFullName1(user.firstName, user.lastName);
function getFullName2(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    return fullName;
}
const fullName = getFullName2(user.firstName, user.lastName);
console.log(fullName);
// -------------------------------------------------------------------------------------------------------------
// pass the object as a paramter
function getFullName4(person) {
    const fullName = person.firstName + " " + person.lastName;
    return fullName;
}
const name = getFullName4(user);
console.log(name);
// --------------------------------------------------------------------------------------------------------------
// rest parameter
function newName(...names) {
    console.log(names);
}
newName("laluprasath", "naveen"); //["laluprasath","naveen"]
// -------------------------------------------------------------------------------------------------------------
// returning array and object
// object
function getPersonDetail(user) {
    user.firstName = "naveen";
    return user;
}
const userDetails = getPersonDetail(user);
console.log(userDetails);
// array
function newName1(...names) {
    return names;
}
console.log(newName1("laluprasath", "naveen"));
//# sourceMappingURL=function.js.map