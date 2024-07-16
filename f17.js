function countLettersUsingObject(str) {
    // Handle empty string
    if (str.length === 0) {
      return {};
    }
  
    // Initialize an empty object to store letter counts (case-insensitive)
    const letterCounts = {};
    const lowerStr = str.toLowerCase();
  
    // Loop through each character in the lowercase string
    for (const char of lowerStr) {
      if (/^[a-z]+$/.test(char)) {
        letterCounts[char] = (letterCounts[char] || 0) + 1;
      }
    }
  
    return letterCounts;
  }
  
  // Example usage (same as previous)
  console.log(countLettersUsingObject(str)); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }