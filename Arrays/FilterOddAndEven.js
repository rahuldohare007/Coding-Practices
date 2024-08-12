let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = [];
let even = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}
console.log("Even:", even);
console.log("Odd:", odd);
