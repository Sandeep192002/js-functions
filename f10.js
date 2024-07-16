function identityMatrix(n) {
    // Handle invalid input (non-positive integers)
    if (n <= 0) {
      throw new Error("Matrix size must be a positive integer.");
    }
  
    // Create an empty matrix array
    const matrix = [];
  
    // Loop to create rows and columns
    for (let i = 0; i < n; i++) {
      matrix[i] = []; // Create a new row array for each iteration
      for (let j = 0; j < n; j++) {
        matrix[i][j] = (i === j) ? 1 : 0; // Fill the diagonal with 1s, others with 0s
      }
    }
  
    return matrix;
  }
  
  // Example usage
  const size = 4;
  const identity = identityMatrix(size);
  
  console.log(identity);
  // Output (for n = 4):
  // [
  //   [ 1, 0, 0, 0 ],
  //   [ 0, 1, 0, 0 ],
  //   [ 0, 0, 1, 0 ],
  //   [ 0, 0, 0, 1 ]
  // ]