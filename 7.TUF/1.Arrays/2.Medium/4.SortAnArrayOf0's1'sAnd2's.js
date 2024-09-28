function sortColors(nums) {
  // ------------------------1.---------------------------------------------------
  // Time: O(n log n) Space: O(1)

  // if(nums.length === 1){
  //     return nums
  // }
  // nums.sort((a, b) => a - b)

  // -------------------------2. Two Pointer--------------------------------------
  // Time: O(n) Space: O(1)
  let l = 0,
    r = nums.length - 1;
  for (let i = 0; i < nums.length && i <= r; ) {
    if (nums[i] === 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      i++, l++;
    } else if (nums[i] === 2) {
      [nums[i], nums[r]] = [nums[r], nums[i]];
      r--;
    } else {
      i++;
    }
  }
}
const nums = [2, 0, 2, 1, 1, 0]; //[0,0,1,1,2,2]
// const nums = [2,0,1] //[0,1,2]
sortColors(nums);
console.log(nums); //[0,0,1,1,2,2]

/*--------Complexity(In Second Approach)-------*/
// Time Complexity = O(n)
// Space Complexity = O(1)
