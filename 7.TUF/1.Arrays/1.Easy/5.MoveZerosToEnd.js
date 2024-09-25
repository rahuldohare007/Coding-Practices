function moveZeroes(nums) {
  // 1.
  let i = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      i++;
    }
  }

  // 2.
  // let countZero = 0;

  // for (let index = 0; index < nums.length;) {
  //     let i = nums.shift();
  //     if (i !== 0) {
  //         nums.push(i);
  //         index++;
  //     } else {
  //         countZero++;
  //     }
  // }

  // while (countZero > 0) {
  //     nums.push(0);
  //     countZero--;
  // }
}

const nums = [0, 1, 0, 3, 12];
// const nums = [0]
moveZeroes(nums);
console.log(nums); //[1,3,12,0,0]
console.log(nums); //[0]

/*--------In Both The Above Solutions--------*/
// Time Complexity = O(n)
// Space Complexity = O(1)
