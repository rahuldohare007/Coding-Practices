function LinearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) return true;
  }
  return false;
}

let array = [1, 5, 69, 420, 500, 56];
let target = 69;

console.log(LinearSearch(array, target));

// Time Complexity
// Best Case: O(1)
// Avg. Case: O(n)
// Worst Case: O(n)
