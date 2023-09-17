// primitive data type

const id: number = 1;
const validUser: string = "laluprasath";
const isAlive: boolean = true;

// * If you don't know the data type,use any keyword.but It's not a best practice

let x: any = "lalu";
x = 21;

//  -------------------------------------------------------------------------------------------------------------------

// refrence data type

let m: string[] = ["laluprasath", "naveen"]; //array

// object
let n: { name: string; age: number } = {
  name: "laluprasath",
  age: 21,
};

// array of object

let employeeDetail: { name: string; age: number }[] = [
  {
    name: "laluprasath",
    age: 21,
  },
  {
    name: "naveen",
    age: 22,
  },
];
