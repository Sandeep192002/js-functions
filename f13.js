function amountToCoins(amount, denominations) {
    // Handle invalid input (non-positive amount or invalid denominations)
    if (amount <= 0 || !Array.isArray(denominations) || denominations.length === 0) {
      throw new Error("Invalid input: amount must be positive and denominations must be a non-empty array.");
    }
  
    // Sort denominations in descending order for greedy approach
    denominations.sort((a, b) => b - a);
  
    // Initialize an empty object to store coin counts
    const coinCounts = {};
  
    // Iterate through denominations
    for (const denomination of denominations) {
      // Calculate the maximum number of coins for the current denomination
      const maxCoins = Math.floor(amount / denomination);
  
      // Add coins to the coinCounts object and subtract their value from the amount
      coinCounts[denomination] = maxCoins;
      amount -= maxCoins * denomination;
  
      // Break the loop if all amount is used up
      if (amount === 0) {
        break;
      }
    }
  
    // Check if the entire amount could not be converted to coins
    if (amount > 0) {
      throw new Error("Amount cannot be represented exactly using the provided denominations.");
    }
  
    return coinCounts;
  }
  
  // Example usage
  const amount = 46;
  const denominations = [25, 10, 5, 2, 1];
  const coinCounts = amountToCoins(amount, denominations);
  
  console.log(coinCounts); // Output: { 25: 1, 10: 1, 5: 1, 1: 1 }