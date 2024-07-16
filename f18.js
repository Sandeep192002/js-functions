function binarySearch(arr, target) {
    // Handle invalid input (empty array or non-sorted array)
    if (arr.length === 0 || !isSorted(arr)) {
      throw new Error("Invalid input: Array must be sorted for binary search.");
    }
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // Calculate the middle index
      const mid = Math.floor((left + right) / 2);
  
      // Check if the target is found at the middle index
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        // Search in the right half if target is greater than middle element
        left = mid + 1;
      } else {
        // Search in the left half if target is less than middle element
        right = mid - 1;
      }
    }
  
    // Target not found
    return -1;
  }
  
  // Helper function to check if an array is sorted (optional)
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage
  const arr = [2, 5, 7, 10, 13, 18];
  const target = 10;
  const index = binarySearch(arr, target);
  
  if (index !== -1) {
    console.log('Target ${target} found at index ${index}');
  } else {
    console.log('Target ${target} not found in the array');
  }