// Create a function named combine that accepts either two numbers or two strings and returns their concatenated value.
// Use function overloading to define the function in two variants: one for numbers and another for strings.
// Return the string.

type CombineFunction = {
    (a: number,b: number):string;
    (a: string,b: string):string;
    (a: number,b: string):string;
    (a: string,b: number):string;
  }

const combine: CombineFunction = (
  a: number | string, 
  b: number | string
):string => {
   return `${a}${b}`
};

console.log(combine(2, 3)); // Expected output: "23"
console.log(combine("Hello, ", "world!")); // Expected output: "Hello, world!"
console.log(combine(5, " days")); // Expected output: "5 days"

export default combine;
