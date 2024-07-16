function generateRandomStringId(length) {
    // Handle invalid input (non-positive length)
    if (length <= 0) {
      throw new Error("Invalid input: Length must be a positive number.");
    }
  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
  
    // Generate random characters using crypto.getRandomValues (recommended)
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(array[i] / 256 * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
  // Example usage
  const idLength = 10;
  const randomId = generateRandomStringId(idLength);
  
  console.log('Generated random ID: ${randomId}');