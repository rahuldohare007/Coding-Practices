// 1.
function findRepeatedCharacters(str) {
  let frequency = {};
  let repeatedChar = "";

  for (let char of str) {
    if (char !== " ") {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  for (let key in frequency) {
    if (frequency[key] > 1) {
      repeatedChar += key;
    }
  }

  console.log(repeatedChar);
}

// 2.
// function findRepeatedCharacters(str) {
//   let Repeated = "";

//   while (str.length > 0) {
//     let newStr = "";
//     let char = str[0];
//     let flag = false;

//     if (char === " ") {
//       // Skip spaces
//       str = str.slice(1); // Move to the next character
//       continue;
//     }

//     for (let i = 1; i < str.length; i++) {
//       if (str[i] == char) {
//         flag = true;
//       } else {
//         newStr += str[i];
//       }
//     }
//     str = newStr;
//     if (flag) Repeated += char;
//   }

//   console.log(Repeated);
// }

let str = "Javascript is awesome";

findRepeatedCharacters(str);
