// Use the `typeof` operator to create a function that dynamically determines the type of the argument and logs it.
// Return a string;

const logType = (value:any) => {
  // Code here.

  //Check the argument is array or not
  if(Array.isArray(value)){
    if(value.length === 0){
      return `The type of the argument is: empty array`;
    } else if(value.every((item) => typeof item === "number")){
      return `The type of the argument is: array of number`;
    } else  if(value.every((item)=> typeof item === "string")){
      return `The type of the argument is: array of string`;
    } else {
      return `The type of the argument is: array`
    }
  } else {
    return `The type of the argument is: ${typeof value}`;
  }



};

// Test cases:
console.log(logType(5)); // Expected output: "The type of the argument is: number"
console.log(logType("hello")); // Expected output: "The type of the argument is: string"
console.log(logType(true)); // Expected output: "The type of the argument is: boolean"
console.log(logType({})); // Expected output: "The type of the argument is: object"
console.log(logType(null)); // Expected output: "The type of the argument is: object"
console.log(logType([])); // Expected output: "The type of the argument is: empty array"
console.log(logType([1, 2, 3])); // Expected output: "The type of the argument is: array of number"
console.log(logType(["hello", "world"])); // Expected output: "The type of the argument is: array of string"
console.log(logType([1, "two", true])); // Expected output: "The type of the argument is: array"

export default logType;
