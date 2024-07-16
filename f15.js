function getFactors(num) {
    // Handle invalid input (non-positive integers)
    if (num <= 0) {
      throw new Error("Input must be a positive integer.");
    }
  
    // Initialize an empty set to store factors (avoids duplicates)
    const factors = new Set();
  
    // Iterate from 1 to the square root of num for efficiency
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        // Add both the factor and its corresponding pair
        factors.add(i);
        factors.add(num / i);
      }
    }
  
    // Convert the set to an array if needed (optional)
    // const factorsArray = Array.from(factors);
  
    return factors;
  }
  
  // Example usage
  const num = 12;
  const factors = getFactors(num);
  
  console.log(factors); // Output: Set(4) {1, 2, 3, 12}
  // You can convert the set to an array if needed:
  // console.log(Array.from(factors)); // Output: [1, 2, 3, 12]