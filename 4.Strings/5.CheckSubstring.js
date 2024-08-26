// 1.
function CheckSubstring(str, substring) {
  return str.split(" ").includes(substring);
}

// 2.
// function CheckSubstring(str1, str2) {
//   const len1 = str1.length;
//   const len2 = str2.length;

//   // Loop through str1
//   for (let i = 0; i <= len1 - len2; i++) {
//     let found = true;

//     // Loop through str2
//     for (let j = 0; j < len2; j++) {
//       if (str1[i + j] !== str2[j]) {
//         found = false;
//         break;
//       }
//     }

//     // If found remains true, we found the substring
//     if (found) {
//       return true;
//     }
//   }

//   // If we complete the loop without finding the substring
//   return false;
// }

let str1 = "Javascript is the best language";
let str2 = "best";

console.log(CheckSubstring(str1, str2));
