function countLetterOccurrences(str, letter) {
    // Handle invalid input (empty string or non-string letter)
    if (str.length === 0 || typeof letter !== "string" || letter.length !== 1) {
      throw new Error("Invalid input: String and single-character letter required.");
    }
  
    const lowerStr = str.toLowerCase(); // Convert to lowercase for case-insensitive counting
    const count = lowerStr.split(letter).length - 1; // Split and count letter occurrences
  
    return count;
  }
  
  // Example usage
  const str = "w3resource.com";
  const letter = "o";
  const count = countLetterOccurrences(str, letter);
  
  console.log(`Number of ' ${letter}' occurrences: ${count}`);