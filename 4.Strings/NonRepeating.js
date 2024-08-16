let str = "Javascript is awesome";
let nonRepeated = "";

while (str.length > 0) {
  let newStr = "";
  let char = str[0];
  let flag = true;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == char) {
      flag = false;
    } else {
      newStr += str[i];
    }
  }
  str = newStr;
    console.log(newStr);
  //   console.log(char);
  //   console.log(nonRepeated)
  if (flag) nonRepeated += char;
}

console.log(nonRepeated);
