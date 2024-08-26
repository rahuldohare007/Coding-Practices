// 1.
function ReverseWords(str) {
  let words = str.split(" ");

  let reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return reversedWords.join(" ");
}

// 2.
// function ReverseWords(str) {
//   let result = "";
//   let word = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " " || i === str.length - 1) {
//       // Add the last character to the word if it's the end of the string
//       if (i === str.length - 1 && str[i] !== " ") {
//         word += str[i];
//       }

//       // Append the reversed word to the result
//       for (let j = word.length - 1; j >= 0; j--) {
//         result += word[j];
//       }

//       // Add a space after the reversed word (except at the end of the string)
//       if (i < str.length - 1) {
//         result += " ";
//       }

//       // Reset the word
//       word = "";
//     } else {
//       // Build the current word
//       word += str[i];
//     }
//   }

//   return result;
// }

let str = "Rahul is a cheater!";

console.log(ReverseWords(str));
