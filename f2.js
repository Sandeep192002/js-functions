function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Check if the cleaned string equals its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
let str1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str1)); // Output: true

let str2 = "racecar";
console.log(isPalindrome(str2)); // Output: true

let str3 = "hello";
console.log(isPalindrome(str3)); // Output: false