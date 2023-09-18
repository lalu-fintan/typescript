// genrices

function getArray<T>(item: T[]): T[] {
  return new Array().concat(item);
}

let newArr1 = getArray<number>([1, 2, 3, 4, 5]); //we can't pass the other data types
let newArr2 = getArray<string>(["lalu", "naveen", "vijay"]);
let newArr3 = getArray<{ id: number; name: string }>([
  { id: 1, name: "laluprasath" },
  { id: 2, name: "naveen" },
]);
console.log(newArr1);
console.log(newArr2);
console.log(newArr3);
