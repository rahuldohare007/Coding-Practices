function maxSubArray(nums) {
  let maxi = -Infinity;
  let sum = 0;

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxi) {
      maxi = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //6
// const nums = [1] //1
// const nums = [5,4,-1,7,8] //23
console.log(maxSubArray(nums));

// Time Complexity = O(n)
// Space Complexity = O(1)
