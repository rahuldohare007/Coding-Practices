// function RemoveNumbers(str) {
//   let result = "";

//   for (let char of str) {
//     if (isNaN(char) && char !== " ") {
//       result += char;
//     }
//   }

//   console.log(result);
// }

// 2.
function RemoveNumbers(str) {
  let result = str.replace(/[0-9\s]/g, "");
  console.log(result);
}

let str = "ab3c5d8 78af";

RemoveNumbers(str);
