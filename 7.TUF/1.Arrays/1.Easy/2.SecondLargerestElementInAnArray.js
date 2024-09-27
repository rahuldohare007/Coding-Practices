function SecondLargest(arr) {
  let Max = -Infinity;
  let secMax = -Infinity;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > Max) {
      secMax = Max;
      Max = arr[index];
    } else if (arr[index] > secMax && arr[index] !== Max) {
      secMax = arr[index];
    }
  }

  if (secMax === -Infinity) {
    return -1;
  } else {
    return secMax;
  }
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(SecondLargest(arr)); // 34

// Time Complexity = O(n)
// Space Complexity = O(1)