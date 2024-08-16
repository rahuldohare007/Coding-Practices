let str = "abcabdeac";
let unique = "";

while (str.length > 0) {
  let newStr = "";
  let char = str[0];
  let flag = false;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == char) {
      flag = true;
    } else {
      newStr += str[i];
    }
  }
  str = newStr;
  unique += str;
}

console.log(unique); //abcde
