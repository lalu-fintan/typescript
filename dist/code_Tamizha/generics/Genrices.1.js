"use strict";
// genrices
function getArray(item) {
    return new Array().concat(item);
}
let newArr1 = getArray([1, 2, 3, 4, 5]); //we can't pass the other data types
let newArr2 = getArray(["lalu", "naveen", "vijay"]);
let newArr3 = getArray([
    { id: 1, name: "laluprasath" },
    { id: 2, name: "naveen" },
]);
console.log(newArr1);
console.log(newArr2);
console.log(newArr3);
//# sourceMappingURL=Genrices.1.js.map