function findMaxConsecutiveOnes() {
  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    }
    if (nums[i] === 0) {
      count = 0;
    }
    if (max < count) {
      max = count;
    }
  }
  return max;
}

const nums = [1, 1, 0, 1, 1, 1];
// const nums = [1,0,1,1,0,1]; //2

console.log(findMaxConsecutiveOnes(nums)); //3

// Time Complexity = O(n)
// Space Complexity = O(1)
