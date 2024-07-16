function bubbleSort(arr) {
    // Handle invalid input (empty or single-element array)
    if (arr.length <= 1) {
      return arr;
    }
  
    let swapped;
    do {
      swapped = false;
      // Loop through all elements except the last (already in place in each pass)
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements if they are in the wrong order
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  // Example usage
  const sampleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
  const sortedArray = bubbleSort(sampleArray.slice()); // Sort a copy to avoid modifying original array
  
  console.log(sortedArray); // Output: [1, 4, 9, 12, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223]