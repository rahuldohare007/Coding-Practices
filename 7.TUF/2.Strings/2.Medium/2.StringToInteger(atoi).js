function myAtoi(s) {
  //1.
  if (parseInt(s) <= -2147483648) return -2147483648;
  else if (parseInt(s) >= 2147483647) return 2147483647;
  return parseInt(s) || 0;

  //2.
  //   const ans = Number.parseInt(s);
  //   if (ans) {
  //     if (ans <= -2147483648) return -2147483648;
  //     else if (ans >= 2147483647) return 2147483647;
  //     else return ans;
  //   }
  //   return 0;
}
const s = "42"; //42
// const s = " -042" //-42
// const s = "1337c0d3" //1337
// const s = "0-1" //0
// const s = "words and 987" //0

console.log(myAtoi(s));

// Time Complexity = O(1)
// Space Complexity = O(1)
