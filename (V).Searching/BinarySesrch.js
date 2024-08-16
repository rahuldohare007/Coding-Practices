let sortedArray = [10, 20, 30, 40, 50, 60];
let searchElement = 10;

let start = 0;
let end = sortedArray.length - 1;
let result = -1;

while (start <= end) {
  let mid = Math.trunc((start + end) / 2);
  if (sortedArray[mid] == searchElement) {
    result = mid;
    break;
  } else if (sortedArray[mid] < searchElement) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

if (result != undefined) console.log(result);
else {
  // result = -1;
  console.log(result);
}

// Time Complexity
// Best Case: O(1)
// Avg. Case: O(log n)
// Worst Case: O(log n)
