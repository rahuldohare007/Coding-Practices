function findFloor(arr, n, x) {
  let left = 0;
  let right = n - 1;
  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] < x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

const n = 7,
  x = 0,
  arr = [1, 2, 8, 10, 11, 12, 19]; //-1

// const n = 7, x = 5, arr = [1,2,8,10,11,12,19];  //1
