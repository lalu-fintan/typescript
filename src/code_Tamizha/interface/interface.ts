// interface -same like a  type ,but interface we can use class component ,but type we can't.
//  * then we cannot use union in interface .

// readonly -If you are not rearrange the one data value use this method.call before keyname
// ? -If you want to pass any optional data use "?",before ":"

interface userDetails {
  readonly id: number;
  name: string;
  age?: number;
}

let usr1: userDetails = {
  id: 1,
  name: "lalu",
};

// ----------------------------------------------------------------------------------------------------------------------------------

// interface with function

interface mathFunc {
  (x: number, y: number): number;
}

const addValue: mathFunc = (x: number, y: number) => x + y;
console.log(addValue);

const multiplyValue: mathFunc = (x: number, y: number) => x * y;
console.log(multiplyValue);
