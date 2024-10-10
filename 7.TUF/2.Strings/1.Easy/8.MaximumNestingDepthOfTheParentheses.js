function maxDepth(s) {
  let maxNum = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      if (count > maxNum) {
        maxNum = count;
      }
    } else if (s[i] === ")") {
      count--;
    }
  }
  return maxNum;
}
const s = "(1+(2*3)+((8)/4))+1"; //3
// const s = "(1)+((2))+(((3)))" //3
// const s = "()(())((()()))" //3

console.log(maxDepth(s));

// Time Complexity = O(n)
// Space Complexity = O(1)
