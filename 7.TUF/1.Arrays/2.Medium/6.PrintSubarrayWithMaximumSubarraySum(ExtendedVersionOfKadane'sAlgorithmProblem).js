function maxSubarrayPrint(nums) {
  let sum = nums[0];
  let maxSum = nums[0];
  let start = 0,
    end = 0,
    tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i] + sum) {
      tempStart = i;
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
      start = tempStart;
      end = i;
    }
  }
  console.log(nums.slice(start, end + 1));
  console.log(maxSum);
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //[ 4, -1, 2, 1 ]  6
maxSubarrayPrint(nums);

// Time Complexity = O(n)
// Space Complexity = O(1)
