let str = "Javascript is awesome";
let Repeated = "";

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
  //   console.log(newStr);
  //   console.log(char);
  //   console.log(Repeated)
  if (flag) Repeated += char;
}

console.log(Repeated);
