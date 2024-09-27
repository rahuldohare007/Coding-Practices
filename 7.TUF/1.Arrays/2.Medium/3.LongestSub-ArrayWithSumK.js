function lenOfLongSubarr(arr, n, k) {
  let maxLen = 0;
  let sum = 0;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // If sum equals 'k', update max length
    if (sum === k) {
      maxLen = i + 1;
    }

    // If (sum - k) exists in the map, it means we found a subarray that sums to 'k'
    if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }

    // Add sum to the map if it doesn't already exist
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLen;
}

const n = 6,
  arr = [10, 5, 2, 7, 1, 9],
  k = 15;

//   const n = 3, arr = [-1, 2, 3], k = 6     // 0 

console.log(lenOfLongSubarr(arr, n, k)); //4 [5, 2, 7, 1]

// Time Complexity = O(n)
// Space Complexity = O(n)

/*----------------------------------------------------------NOTE---------------------------------------------------------
Short Note to Remember the Code:
• Objective: Find the length of the longest subarray that sums to a given value k.

• Approach:
    ○ Use prefix sums to track cumulative sum at each index.
    ○ Store each unique sum in a hash map (map), mapping it to the index where it first appears.
    ○ Key Idea: If the current sum minus k exists in the map, it means that a subarray summing to k exists between the current index and 
       the stored index in the map.
    ○ Update the maximum subarray length (maxLen) whenever a valid subarray is found.

• Key Points:
    ○ Map: Stores cumulative sum and its index.
    ○ Check: For (sum - k) in the map to find valid subarray.
    ○ Time Complexity: O(n) — efficient as it traverses the array once.

This method avoids recalculating the sum for every subarray, ensuring optimal performance.
--------------------------------------------------------------------------------------------------------------------------*/
