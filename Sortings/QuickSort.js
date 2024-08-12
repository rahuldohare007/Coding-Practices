const array = [-Infinity, 9, 4, 0.1, 800, 90];

function QuickSort(array) {
  if (array.length < 2) return array;
  let pivot = array[0];
  let leftArr = [],
    rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) rightArr.push(array[i]);
    else leftArr.push(array[i]);
  }

  console.log(leftArr, rightArr)
  let sortedLeftArr = QuickSort(leftArr);
  let sortedRightArr = QuickSort(rightArr);

  return [...sortedLeftArr, pivot, ...sortedRightArr];
}

console.log(QuickSort(array));

// Time Complexity
// Best Case: O(n log (n))
// Avg. Case: O(n log (n))
// Worst Case: O(n^2)

// Space Complexity
// O(n)
