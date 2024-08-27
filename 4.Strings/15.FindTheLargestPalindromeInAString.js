function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  return reverse === str;
}

function FindTheLargestPalindromeInAString(str) {
  let maxLengthPalindrome = "";
  let words = str.split(" ");

  for (let word of words) {
    if (isPalindrome(word) && word.length > maxLengthPalindrome.length) {
      maxLengthPalindrome = word;
    }
  }

  console.log(maxLengthPalindrome);
}

let str = "aba aa cdadc vababav abcdef ade";

FindTheLargestPalindromeInAString(str);
