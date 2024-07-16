function reverseNumber(num) {
    let reversedNum = 0;
    const isNegative = num < 0; // Handle negative numbers
  
    num = Math.abs(num); // Convert to absolute value
  
    while (num > 0) {
      const lastDigit = num % 10;
      reversedNum = (reversedNum * 10) + lastDigit;
      num = Math.floor(num / 10);
    }
  
    return isNegative ? -reversedNum : reversedNum; // Restore negative sign if needed
  }
  
  // Example usage
  const x = 32243;
  const reversedX = reverseNumber(x);
  console.log('Original number: ${x}, Reversed number: ${reversedX}');