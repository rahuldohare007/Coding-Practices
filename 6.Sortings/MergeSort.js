function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves
  let mid = Math.trunc(array.length / 2);
  let leftArr = mergeSort(array.slice(0, mid));
  let rightArr = mergeSort(array.slice(mid));

  // Merge the sorted halves
  return merge(leftArr, rightArr);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare the elements of both arrays and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Concatenate any remaining elements
  return result.concat(left.slice(i), right.slice(j));
}

const array = [-Infinity, 9, 4, 0.1, Infinity, 800, 90];

console.log(mergeSort(array));

// Time Complexity
// Best Case: O(n log (n))
// Avg. Case: O(n log (n))
// Worst Case: O(n log (n))

// Space Complexity
// O(n)
