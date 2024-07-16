function countVowels(str) {
    // Define vowels in an array
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a counter for vowels
    let count = 0;
    
    // Convert the string to lowercase to handle case insensitivity
    str = str.toLowerCase();
    
    // Loop through each character of the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
let str = "JavaScript is awesome";
console.log(countVowels(str)); // Output: 7 (a, a, i, a, e, o, e)

str = "Hello World";
console.log(countVowels(str)); // Output: 3 (e, o, o)