// Practice Problems – Set 1 (Beginner Level)

// Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Check if a String is a Palindrome
function palindromeCheck(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

//Count Vowels in a String
function countVowel(str) {
  const vowelArr = ["a", "e", "i", "o", "u"];
  let lowerCase = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerCase.length; i++) {
    let match = vowelArr.includes(lowerCase[i]);
    if (match) count++;
  }
  return count;
}

// Concise way to count Vowels in a String
function secondCountVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

//Find the First Non-Repeating Character in a String

// Convert the First Letter of Each Word to Uppercase
function upperCase(str) {
  return str[0].toUpperCase();
}
