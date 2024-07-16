function isPerfectNumber(num) {
    // Handle invalid input (non-positive integers)
    if (num <= 0) {
      return false;
    }
  
    // Initialize sum of divisors (excluding the number itself)
    let sumOfDivisors = 0;
  
    // Iterate through potential divisors (from 1 to num/2)
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sumOfDivisors += i;
      }
    }
  
    // Check if the sum of divisors is equal to the original number
    return sumOfDivisors === num;
  }
  
  // Example usage
  const num1 = 6;
  const num2 = 15;
  
  console.log(isPerfectNumber(num1)); // Output: true (6 is a perfect number)
  console.log(isPerfectNumber(num2)); // Output: false (15 is not a perfect number)
   function getFactors(num) {
    // Handle invalid input (non-positive integers)
    if (num <= 0) {
      throw new Error("Input must be a positive integer.");
    }
  
    // Initialize an empty array to store factors
    const factors = [];
  
    // Iterate from 1 to the square root of num (efficient for finding factors)
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        // Add the factor and its corresponding pair (if not the same)
        factors.push(i);
        const otherFactor = num / i;
        if (otherFactor !== i) {
          factors.push(otherFactor);
        }
      }
    }
  
    // Sort the factors in ascending order (optional)
    factors.sort((a, b) => a - b);
  
    return factors;
  }
  
  // Example usage
  const num = 12;
  const factors = getFactors(num);
  
  console.log(factors); // Output: [1, 2, 3, 4, 6, 12]