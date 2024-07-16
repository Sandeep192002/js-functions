function capitalizeFirstLetters(str) {
    // Split the string into an array of words
    const words = str.split(/\s+/);
  
    // Capitalize the first letter of each word using a loop
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    // Join the words back into a string with spaces
    return words.join(' ');
  }
  
  // Example usage
  const str = "hello world, this is a string";
  const capitalizedStr = capitalizeFirstLetters(str);
  console.log(capitalizedStr); // Output: Hello World, This Is A String