function majorityElement(nums) {
  // 1.-------------------------------------------------------------
  //  Time: O(n) and Space: O(n)
  // let frequency = {};

  // for(let value of nums){
  //     frequency[value] = (frequency[value] || 0) + 1;
  // }

  // for(let key in frequency){
  //     if(frequency[key] > Math.floor(nums.length/2)){
  //         return key
  //     }
  // }

  // 2.--------------------------------------------------------------
  // Time: O(n) and Space: O(1)
  let result = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      result = num;
    }
    count += num === result ? 1 : -1;
  }

  return result;
}

const nums = [3, 2, 3];
// const nums = [2,2,1,1,1,2,2] //2
console.log(majorityElement(nums)); //3

/*--------Complexity(In Second Approach)-------*/
// Time Complexity = O(n)
// Space Complexity = O(1)
