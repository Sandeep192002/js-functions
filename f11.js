function findSecondLowestAndGreatest(arr) {
    // Handle empty arrays or arrays with less than 2 elements
    if (arr.length < 2) {
      throw new Error("Array must contain at least 2 elements.");
    }
  
    // Sort the array in ascending order
    const sortedArr = [...arr].sort((a, b) => a - b); // Avoid modifying the original array
  
    // Extract second lowest and second greatest elements
    const secondLowest = sortedArr[1];
    const secondGreatest = sortedArr[sortedArr.length - 2];
  
    // Return the results
    return [secondLowest, secondGreatest];
  }
  
  // Example usage
  const sampleArray = [1, 2, 3, 4, 5];
  const result = findSecondLowestAndGreatest(sampleArray);
  
  console.log(result); // Output: [2, 4]