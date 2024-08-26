// 1.
// function RemoveNumbers(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (isNaN(str[i]) || str[i] === " ") {
//       result += str[i];
//     }
//   }

//   console.log(result);
// }

// 2.
function RemoveNumbers(str) {
  let result = str.replace(/[0-9]/g, "");
  console.log(result);
}

let str = "ab3c5d8";

RemoveNumbers(str);
