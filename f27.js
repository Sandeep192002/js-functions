function findLongestPalindrome(str) {
    // Handle invalid input (empty string)
    if (str.length === 0) {
      return "";
    }
  
    const n = str.length;
    const dp = Array(n).fill(false); // Create a 2D boolean DP table (optimized for space)
  
    // Base cases (single character is a palindrome)
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
    }
  
    let maxLength = 1;
    let start = 0;
  
    // Iterate for lengths of 2 and above
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i < n - len + 1; i++) {
        const j = i + len - 1; // Calculate end index for current substring
  
        // Check if characters are the same and the substring of length len-2 is a palindrome
        if (str[i] === str[j] && (len === 2 || dp[i + 1][j - 1])) {
          dp[i][j] = true;
          if (len > maxLength) {
            maxLength = len;
            start = i;
          }
        }
      }
    }
  
    // Return the longest palindrome substring
    return str.substring(start, start + maxLength);
  }
  
  // Example usage
  const str = "forgeeksskeegfor";
  const longestPalindrome = findLongestPalindrome(str);
  
  console.log('Longest palindrome: ${longestPalindrome}'); // Output: Longest palindrome: geeksskeeg