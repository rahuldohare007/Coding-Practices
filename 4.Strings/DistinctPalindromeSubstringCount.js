function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  return reverse === str;
}

function PSS(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);

      if (
        isPalindrome(substring) &&
        result.includes(substring) === false // !result.includes(substring)
      ) {
        result.push(substring);
      }
    }
  }
  console.log(result);
  console.log(result.length);
}

let str = "ababa";
// let str = "aba";
PSS(str);
