function uniqueCharsUsingSet(str) {
    // Handle empty string
    if (str.length === 0) {
      return "";
    }
  
    // Create a Set to store unique characters (avoids duplicates)
    const uniqueChars = new Set(str);
  
    // Join the characters from the Set into a string
    return [...uniqueChars].join('');
  }
  
  // Example usage
  const str = "thequickbrownfoxjumpsoverthelazydog";
  const unique = uniqueCharsUsingSet(str);
  
  console.log(unique); // Output: "thequickbrownfoxsjmpvzydlg"