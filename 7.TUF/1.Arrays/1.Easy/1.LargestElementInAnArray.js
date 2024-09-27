function largest(arr) {
  let maxElement = -Infinity;

  for (let value of arr) {
    if (value > maxElement) {
      maxElement = value;
    }
  }

  return maxElement;
}

const arr = [1, 8, 7, 56, 90];
console.log(largest(arr));  //90

// Time Complexity = O(n)
// Space Complexity = O(1)
