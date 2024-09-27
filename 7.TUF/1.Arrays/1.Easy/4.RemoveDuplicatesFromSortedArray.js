function removeDuplicates(nums) {
  let index = 1;
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== prev) {
      prev = nums[i];
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}

const nums = [1, 1, 2]; //2 [1,2,_]
// const nums = [0,0,1,1,1,2,2,3,3,4] // 5  [0,1,2,3,4,_,_,_,_,_]

console.log(removeDuplicates(nums)) 

// Time Complexity = O(n)
// Space Complexity = O(1)
