let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -69];

let reverse = [];

//1. for (let i = array.length - 1; i >= 0; i--) {
//   reverse.push(array[i]);
// }

for (let i = 0; i < array.length; i++) {
  reverse.unshift(array[i]);
}

console.log("Normal:", array);
console.log("Reverse:", reverse);
