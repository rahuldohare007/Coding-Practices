// 1.
function binarySearchIterative(
  sortedArray,
  searchElement,
  left = 0,
  right = sortedArray.length - 1
) {
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (sortedArray[mid] === searchElement) {
      return mid;
    } else if (sortedArray[mid] < searchElement) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// 2.
function binarySearchRecursive(
  sortedArray,
  searchElement,
  left = 0,
  right = sortedArray.length - 1
) {
  if (left > right) {
    return -1;
  }
  const mid = Math.trunc((left + right) / 2);

  if (sortedArray[mid] === searchElement) {
    return mid;
  }
  
  if (sortedArray[mid] < searchElement) {
    return binarySearchRecursive(sortedArray, searchElement, mid + 1, right);
  } else {
    return binarySearchRecursive(sortedArray, searchElement, left, mid - 1);
  }
}

const sortedArray = [10, 20, 30, 40, 50, 60];
const searchElement = 60;

console.log(binarySearchIterative(sortedArray, searchElement));
console.log(binarySearchRecursive(sortedArray, searchElement));
