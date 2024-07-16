function generateCombinations(str) {
    let result = [];

    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Generate combinations starting from each character
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}

// Example usage:
let str = 'dog';
console.log(generateCombinations(str)); // Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]