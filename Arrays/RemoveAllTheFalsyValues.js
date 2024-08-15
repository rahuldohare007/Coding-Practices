let array = [1, 0, 5, null, "abc", "", NaN, "0"];
let result = array.filter(Boolean);
// for (let i = 0; i < array.length; i++) {
//   //   1. let flag = Boolean(array[i]);
//   //   if (flag) result.push(array[i]);

//   if (array[i]) {
//     result.push(array[i]);
//   }
// }
console.log("Result: ", result);
