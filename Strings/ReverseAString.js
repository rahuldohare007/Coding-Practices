let str = "Rahul";

// function Reverse(str) {
//   return str.split("").reverse().join("");
// }

function Reverse(str) {
  let Result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    Result += str[i];
  }
  return Result;
}

console.log(Reverse(str));
