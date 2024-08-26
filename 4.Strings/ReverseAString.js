// 1.
// function Reverse(str) {
//   return str.split("").reverse().join("");
// }

// 2.
// function Reverse(str) {
//   let Result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     Result += str[i];
//   }

//   return Result;
// }

// 3.
function Reverse(str) {
  return [...str].reverse().join("");
}

let str = "Rahul is a cheater!";

console.log(Reverse(str));
