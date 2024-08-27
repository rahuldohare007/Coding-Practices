// 1.
function CountTheCharacters(str) {
  let result = "";
  let count = 1;

  str.split("").forEach((char, index) => {
    if (char !== " ") {
      if (char === str[index + 1]) {
        count++;
      } else {
        result += char + count;
        count = 1;
      }
    }
  });

  console.log(result);
}

// 2.
// function CountTheCharacters(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let count = 1;

//     if (str[i] !== " ") {
//       while (i + 1 < str.length && str[i] === str[i + 1]) {
//         count++;
//         i++;
//       }
//       result += str[i] + count;
//     }
//   }
//   console.log(result);
// }


let str = "aabbccca affkk";

CountTheCharacters(str);
