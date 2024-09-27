function findMissing(nums) {
  let expectedSum = 0;
  let currentSum = 0;

  for (let values of nums) {
    currentSum += values;
  }
  for (let i = 0; i <= nums.length; i++) {
    expectedSum += i;
  }
  return expectedSum - currentSum;
}

const nums = [3,0,1];
// const nums = [0,1];
// const nums = [9,6,4,2,3,5,7,0,1];

console.log(findMissing(nums)) //2
console.log(findMissing(nums)) //2
console.log(findMissing(nums)) //8

// Time Complexity = O(n)
// Space Complexity = O(1)