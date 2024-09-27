function CheckSorted(nums) {
  let count = 0;
  let len = nums.length - 1;

  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }

  if (count > 1 || (count === 1 && nums[0] < nums[len])) {
    return false;
  }

  return true;
}

const nums = [3, 4, 5, 1, 2];
console.log(CheckSorted(nums)); //true

// Time Complexity = O(n)
// Space Complexity = O(1)


/* --------------------------------------------------------- NOTE -----------------------------------------------------------------
Your approach to checking whether the array is "sorted and rotated" can be summarized as follows:

Count Decreasing Pairs:
• You iterate through the array and count how many times an element is greater than the next element (nums[i] > nums[i + 1]).

Conditions for Rotated Sorted Array:
• If the count of such decreasing pairs is greater than 1, the array is not sorted and rotated, so you return false.
• If the count is exactly 1, you additionally check if the first element is smaller than the last element (nums[0] < nums[len]).
• If true, return false (the rotation would not fit a sorted pattern).

Return True:
• If neither condition above is met, the array is considered sorted and rotated, and you return true.
---------------------------------------------------------------------------------------------------------------------------------*/
