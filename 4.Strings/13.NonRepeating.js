// 1.
function findNonRepeatedCharacters(str) {
  let nonRepeated = "";
  let frequency = {};

  for (let char of str) {
    if (char !== " ") {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  for (let key in frequency) {
    if (frequency[key] === 1) {
      nonRepeated += key;
    }
  }

  console.log(nonRepeated);
}

// 2.
function findNonRepeatedCharacters(str) {
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

    if (flag) nonRepeated += char;
  }

  console.log(nonRepeated);
}

let str = "Javascript is awesome";

findNonRepeatedCharacters(str);
