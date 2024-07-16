function getType(arg) {
    // Use the built-in typeof operator
    return typeof arg;
  }
  
  // Example usage
  const num = 10;
  const str = "hello";
  const bool = true;
  const obj = {};
  const arr = [1, 2, 3];
  const func = function() {};
  const nullVal = null;
  const undefinedVal = undefined;
  
  console.log(getType(num));       // Output: "number"
  console.log(getType(str));       // Output: "string"
  console.log(getType(bool));      // Output: "boolean"
  console.log(getType(obj));       // Output: "object"
  console.log(getType(arr));       // Output: "object" (arrays are technically a type of object)
  console.log(getType(func));     // Output: "function"
  console.log(getType(nullVal));   // Output: "object" (historical behavior, technically should be "null")
  console.log(getType(undefinedVal)); // Output: "undefined"