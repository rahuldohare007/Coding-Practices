function twoSum(nums, target) {
  //    1.-------------------------------------
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  //   2.---------------------------------------
  const pairIdx = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (target - num in pairIdx) {
      return [i, pairIdx[target - num]];
    }
    pairIdx[num] = i;
  }
}

const nums = [2, 7, 11, 15],
  target = 9; // [0,1]

// const nums = [3, 2, 4], target = 6; // [1,2]
// const nums = [3,3], target = 6  //[0,1]

console.log(twoSum(nums, target)); //[0,1]

/*--------------In Both The Above Solutions--------------*/
// Time Complexity = O(n)
// Space Complexity = O(n)
