function findLongestSubstringWithoutRepeatingChars(str) {
    // Handle invalid input (empty string)
    if (str.length === 0) {
      return "";
    }
  
    let longest = 0;
    let left = 0;
    let charSet = new Set(); // Use a Set for efficient character existence checks
  
    for (let right = 0; right < str.length; right++) {
      const char = str[right];
  
      // Check if character already exists in the current substring
      while (charSet.has(char)) {
        charSet.delete(str[left]); // Remove leftmost character from the Set
        left++;
      }
  
      // Update character set and longest substring length
      charSet.add(char);
      longest = Math.max(longest, right - left + 1);
    }
  
    return str.substring(left, left + longest);
  }
  
  // Example usage
  const str = "abcabcbb";
  const longestSubstring = findLongestSubstringWithoutRepeatingChars(str);
  
  console.log('Longest substring without repeating characters: ${longestSubstring}'); // Output: Longest substring without repeating characters: abc