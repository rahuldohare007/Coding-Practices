// 1. Iterative Approach
function PalindromeNumber(number) {
  if (number < 0) return false;
  let reversed = 0;
  let temp = number;

  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.trunc(temp / 10);
  }

  return number == reversed;
}
console.log(PalindromeNumber(12321));

// 2. String Approach
function PalindromeNumber(number) {
  if (number < 0) return false;
  let newStr = number.toString();

  let reversed = newStr.split("").reverse().join("");

  return reversed == number;
}
console.log(PalindromeNumber(12321));
