function rearrangeArray(nums) {
  // 1.
  // Time: O(n)
  // Space: O(n)
  let positive = [];
  let negative = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negative.push(nums[i]);
    } else {
      positive.push(nums[i]);
    }
  }

  for (
    let i = 0, j = 0, count = 0;
    i <= positive.length && j < negative.length;
    count++
  ) {
    if (count % 2 === 0) {
      result.push(positive[i]);
      i++;
    } else {
      result.push(negative[j]);
      j++;
    }
  }
  return result;

  // 2.
  // Time: O(n)
  // Space: O(n)

  //   let result = [];
  //   let positive = nums.filter((n) => n >= 0);
  //   let negative = nums.filter((n) => n < 0);

  //   for (let i = 0; i < positive.length; i++) {
  //     result.push(positive[i], negative[i]);
  //   }

  //   return result;
}

const nums = [3, 1, -2, -5, 2, -4]; //[3,-2,1,-5,2,-4]
// const nums = [-1,1] //[1,-1]
console.log(rearrangeArray(nums));

/*--------------In Both The Above Solutions--------------*/
// Time Complexity = O(n)
// Space Complexity = O(n)
