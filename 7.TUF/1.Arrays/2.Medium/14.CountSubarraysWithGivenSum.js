function subarraySum(nums) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) count += map.get(sum - k);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  return count;
}

const nums = [1, 1, 1],
  k = 2; // 2
// const nums = [1,2,3], k = 3 //2

console.log(subarraySum(nums));

// Time Complexity = O(n)
// Space Complexity = O(n)

/*------------------------------------Steps to Solve the Subarray Sum Problem:------------------------------------------------
• Goal: Find the number of subarrays that sum to a given value k.
• Use of Prefix Sum:
   ○ Maintain a running sum (sum) of elements as you iterate through the array.
   ○ For each element, check if sum - k has occurred before (stored in a map). This helps in identifying subarrays that sum up to k.
• HashMap to Store Prefix Sums:
   ○ Use a Map to store the frequency of each prefix sum.
   ○ Initialize the map with (0,1) to handle cases where the subarray starts from the beginning.
• Count Matching Subarrays:
   ○ For every element, check if sum - k exists in the map. If it does, it means there's a subarray that sums to k from a previous point to the current position.
• Update Map:
   ○ Add or update the current sum in the map for future checks.
• Return the Count:
   ○ After iterating through the array, return the total count of subarrays that sum to k.

• Time Complexity:
   ○ O(n) because you traverse the array once.
• Space Complexity:
   ○ O(n) for storing the prefix sums in the map.
----------------------------------------------------------------------------------------------------------------------------*/
