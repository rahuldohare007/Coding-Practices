function singleNumber(nums) {
  // 1.
  // Time Complexity = O(n)
  // Space Complexity = O(1)
  let uniqNum = 0;
  for (let i = 0; i < nums.length; i++) {
    uniqNum = uniqNum ^ nums[i];
  }
  return uniqNum;

  // 2.
  // Time Complexity = O(n)
  // Space Complexity = O(n)
  let frequency = {};

  for (let values of nums) {
    frequency[values] = (frequency[values] || 0) + 1;
  }

  for (let key in frequency) {
    if (frequency[key] === 1) {
      return key;
    }
  }
}

const nums = [2, 2, 1];
// const nums = [4,1,2,1,2] //4
// const nums = [1] //1

console.log(singleNumber(nums)); //1

// Time Complexity = O(n)
// Space Complexity = O(1)
