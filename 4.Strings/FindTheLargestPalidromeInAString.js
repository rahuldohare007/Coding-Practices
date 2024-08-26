function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  return reverse === str;
}

function FindTheLargestPalindromeInAString(str) {
  let words = str.split(" ");
  let maxPalindromeWord = "";

  for (let word of words) {
    if (isPalindrome(word)) {
      if (word.length > maxPalindromeWord.length) {
        maxPalindromeWord = word;
      }
    }
  }

  console.log(maxPalindromeWord);
}

let str = "aba aa cdadc abababa abcdef ade";

FindTheLargestPalindromeInAString(str);
