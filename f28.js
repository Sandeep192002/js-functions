// Function to be passed as a parameter
function greet(name) {
    return Hello;
  }
  
  // Function accepting another function as a parameter
  function callFunction(func, arg) {
    const result = func(arg); // Call the passed function with the argument
    console.log(result);
  }
  
  // Call the callFunction with greet as the parameter
  callFunction(greet, "John"); // Output: Hello, John!