function getCombinations(arr, length) {
    // Handle invalid input (non-positive length or empty array)
    if (length <= 0 || arr.length === 0) {
      return [];
    }
  
    // Recursive helper function for generating combinations
    function generateCombinations(current, index, remaining) {
      if (remaining === 0) {
        return [current.slice()]; // Return a copy of the current combination
      }
  
      const combinations = [];
      for (let i = index; i < arr.length; i++) {
        current.push(arr[i]);
        combinations.push(...generateCombinations(current, i + 1, remaining - 1));
        current.pop(); // Backtrack: remove the added element
      }
  
      return combinations;
    }
  
    return generateCombinations([], 0, length);
  }
  
  // Example usage
  const sampleArray = [1, 2, 3];
  const subsetLength = 2;
  const combinations = getCombinations(sampleArray, subsetLength);
  
  console.log(combinations); // Output: [[1, 2], [1, 3], [2, 3]]