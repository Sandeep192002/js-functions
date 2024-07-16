function findFirstNonRepeatedChar(str) {
    // Handle invalid input (empty string)
    if (str.length === 0) {
      return "";
    }
  
    const charCounts = new Map(); // Use a Map for efficient character frequency storage
  
    // Count character occurrences
    for (const char of str) {
      const count = charCounts.get(char) || 0; // Get existing count or initialize to 0
      charCounts.set(char, count + 1);
    }
  
    // Find the first character with a count of 1
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCounts.get(char) === 1) {
        return char;
      }
    }
  
    // No non-repeated character found
    return "";
  }
  
  // Example usage
  const str = "abacddbec";
  const firstNonRepeated = findFirstNonRepeatedChar(str);
  
  console.log('First non-repeated character: ${firstNonRepeated}'); // Output: First non-repeated character: e