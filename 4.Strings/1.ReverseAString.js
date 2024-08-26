// 1.
// function ReverseAString(str) {
//   return str.split("").reverse().join("");
// }

// 2.
// function ReverseAString(str) {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// 3.
function ReverseAString(str) {
  return [...str].reverse().join("");
}

let str = "Rahul";

console.log(ReverseAString(str));
