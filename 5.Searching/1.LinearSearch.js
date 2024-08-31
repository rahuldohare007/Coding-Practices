function LinearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}

let array = [1, 5, 69, 420, 500, 56];
let target = 69;

console.log(LinearSearch(array, target));

// Time Complexity
// Best Case: O(1)
// Avg. Case: O(n)
// Worst Case: O(n)
