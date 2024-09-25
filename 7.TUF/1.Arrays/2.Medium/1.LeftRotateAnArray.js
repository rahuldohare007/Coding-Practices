function rotate(nums, k) {
  const n = nums.length;
  k = k % n;
  const res = new Array(n);

  for (let i = 0; i < n; i++) {
    res[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = res[i];
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums); //[5,6,7,1,2,3,4]

// Time Complexity = O(n)
// Space Complexity = O(n)