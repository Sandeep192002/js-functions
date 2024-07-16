function findLongestCountryName(countries) {
    // Handle invalid input (empty array)
    if (countries.length === 0) {
      return "";
    }
  
    let longestName = countries[0]; // Initialize with the first element
  
    for (let i = 1; i < countries.length; i++) {
      const currentCountry = countries[i];
      // Compare lengths using string length property
      if (currentCountry.length > longestName.length) {
        longestName = currentCountry;
      }
    }
  
    return longestName;
  }
  
  // Example usage
  const countries = ["Australia", "Germany", "United States of America"];
  const longestCountry = findLongestCountryName(countries);
  
  console.log('Longest country name: ${longestCountry}'); // Output: Longest country name: United States of America