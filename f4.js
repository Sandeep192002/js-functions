function sortStringAlphabetically(str) {
    // Convert the string to lowercase (optional, for case-insensitive order)
    const lowerCaseStr = str.toLowerCase();
  
    // Split the string into an array of characters
    const charArray = lowerCaseStr.split('');
  
    // Sort the character array
    charArray.sort();
  
    // Join the sorted characters back into a string
    return charArray.join('');
  }
  
  // Example usage
  const str = "webmaster";
  const sortedStr = sortStringAlphabetically(str);
  console.log(sortedStr); // Output: abemrstw