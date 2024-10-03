function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      return num.slice(0, i + 1);
    }
  }

  return "";
}

const num = "52"; //"5"
// const num = "4206" //""
// const num = "35427" //"35427"

console.log(largestOddNumber(num));

// Time Complexity = O(n)
// Space Complexity = O(1)