function isPalindrome(word) {
    // Stop condition: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively test the rest of the word (excluding the compared characters)
        return isPalindrome(word.slice(1, -1));
    } else {
        // Characters are different, not a palindrome
        return false;
    }
}

// Test the function
console.log(isPalindrome("gag"));    // true
console.log(isPalindrome("kayak"));  // true
console.log(isPalindrome("php"));    // true
console.log(isPalindrome("radar"));  // true
console.log(isPalindrome("hello"));  // false