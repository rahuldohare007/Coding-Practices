function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12],
  target = 9; //4
// const nums = [-1,0,3,5,9,12], target = 2  //-1

console.log(binarySearch(nums, target));

// Time Complexity = O(log n)
// Space Complexity = O(1)
