const array = [-Infinity, 9, 4, 0.1, Infinity, 800, 90];

function Divide(array) {
  if (array.length < 2) return array;
  let mid = Math.trunc(array.length / 2);
  let leftArr = array.slice(0, mid);
  let rightArr = array.slice(mid);

  return Merge(Divide(leftArr), Divide(rightArr));
}

function Merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    //   leftIndex++;
    } else {
      result.push(right[rightIndex++]);
    //   rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(Divide(array));

// Time Complexity
// Best Case: O(n log (n))
// Avg. Case: O(n log (n))
// Worst Case: O(n log (n))

// Space Complexity
// O(n)