function isPrime(num) {
    // Handle invalid input (non-positive integers)
    if (num <= 1) {
      return false;
    }
  
    // Handle special cases (2 and 3)
    if (num <= 3) {
      return true;
    }
  
    // Check for divisibility by 2 and 3 first (optimization)
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    // Only check for divisibility by numbers in the form 6k ± 1 (optimization)
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    // If no divisors found, the number is prime
    return true;
  }
  
  // Example usage
  const num1 = 11;
  const num2 = 15;
  
  console.log(isPrime(num1)); // Output: true
  console.log(isPrime(num2)); // Output: false