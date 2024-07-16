function calculatePower(base, exponent) {
    // Handle invalid input (non-numeric or negative exponent)
    if (isNaN(exponent) || exponent < 0) {
      return "Invalid input: Exponent must be a non-negative number.";
    }
  
    // Calculate the power using Math.pow() or recursion (choose one approach)
  
    // Approach 1: Using Math.pow() (built-in function)
    return Math.pow(base, exponent);
  
    // Approach 2: Using Recursion (optional)
    // if (exponent === 0) {
    //   return 1;
    // } else {
    //   return base * calculatePower(base, exponent - 1);
    // }
  }
  
  // Prompt user for input (using prompt and parseInt)
  const base = parseInt(prompt("Enter a base number:"));
  const exponent = parseInt(prompt("Enter an exponent (non-negative):"));
  
  // Calculate and display the result
  const result = calculatePower(base, exponent);
  console.log('The value of ${base}^${exponent} is: ${result}');