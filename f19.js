function filterLargerThan(arr, num) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Example usage
  const arr = [5, 8, 2, 10, 1];
  const num = 5;
  const largerElements = filterLargerThan(arr, num);
  
  console.log(largerElements); // Output: [8, 10]