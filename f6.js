function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.trim().split(/\s+/); // Trim leading/trailing spaces and split using any whitespace
  
    // Initialize variables to track the longest word
    let longestWord = "";
    let longestWordLength = 0;
  
    // Iterate over each word in the array
    for (const word of words) {
      const currentWordLength = word.length;
  
      // Update longestWord and longestWordLength if current word is longer
      if (currentWordLength > longestWordLength) {
        longestWord = word;
        longestWordLength = currentWordLength;
      }
    }
  
    return longestWord;
  }
  
  // Example usage
  const str = "Web Development Tutorial";
  const longestWord = findLongestWord(str);
  console.log(longestWord); // Output: "Development"