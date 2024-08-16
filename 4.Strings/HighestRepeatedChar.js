let str = "abcabdaebdcb";
let maxRepeatChar = "";
let maxCount = 0;
while (str.length > 0) {
  let newStr = "";
  let char = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    } else {
      newStr += str[i];
    }
  }
  str = newStr;
  if (count > maxCount) {
    maxCount = count;
    maxRepeatChar = char;
  }
}
console.log(maxRepeatChar);
