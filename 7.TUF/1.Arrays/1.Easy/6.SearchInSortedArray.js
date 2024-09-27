function SearchInSorted(arr, N, K) {
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === K) {
      return 1;
    } else if (K < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 6],
  N = 5,
  K = 6;

console.log(SearchInSorted(arr, N, K)); // 1

// Time Complexity = O(log n)
// Space Complexity = O(1)