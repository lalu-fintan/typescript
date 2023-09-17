// If you are not returing anything ,just know the data in console.log.use void .

function add(a: number, b: number): number {
  return a + b;
}

function logMe(a: number | string): void {
  if (typeof a === "number") console.log("number");
  if (typeof a === "string") console.log("string");
}

logMe(3);
