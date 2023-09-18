"use strict";
// tuples - If you are know the which data pass into my array means ,you can use tuples.
// if you want to passing diffrence type of data's into the array ,you can use tupels
// tuple
let valid = [1, "naveen", 23];
// tuple Array -if it is repeating same type of array inside of another array ,you can use tuple array
let validValue = [
    [1, "naveen", 23],
    [2, "lalu", 22],
    [3, "muthu", 25],
];
// ---------------------------------------------------------------------------------------------------------------------------------------
// unions -if you are think the value can be anything ,for ex: eid:number|string;,In this type of scenorios you can use union operator.
let eid;
eid = 2;
eid = "2";
// eid=true //it throw the error
//----------------------------------------------------------------------------------------------------------------------------------------
// enum - Enums allow a developer to define a set of named constants.TypeScript provides both numeric and string-based enums
var Applikation;
(function (Applikation) {
    Applikation[Applikation["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Applikation[Applikation["SUB_ADMIN"] = 1] = "SUB_ADMIN";
    Applikation[Applikation["PARTICIPATES"] = 2] = "PARTICIPATES";
})(Applikation || (Applikation = {}));
var Applikation2;
(function (Applikation2) {
    Applikation2["SUPER_ADMIN"] = "superAdmin";
    Applikation2["SUB_ADMIN"] = "subAdmin";
    Applikation2["PARTICIPATES"] = "participates";
})(Applikation2 || (Applikation2 = {}));
console.log(Applikation.PARTICIPATES); //2
console.log(Applikation2.SUB_ADMIN); // "subAdmin"
// ----------------------------------------------------------------------------------------------------------------------------------------
// type assertion -If you want to chnage the value one type to another type use type assertions.
let x2 = "3";
let x3 = x2; //1 method *
let x4 = x2; //2 nd method
console.log(typeof x3); //number
//# sourceMappingURL=advance.types.js.map