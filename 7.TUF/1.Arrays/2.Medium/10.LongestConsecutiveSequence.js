function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

const nums = [100, 4, 200, 1, 3, 2]; //4
// The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// const nums = [0,3,7,2,5,8,4,6,0,1]; //9

console.log(longestConsecutive(nums));

// Time Complexity = O(n)
// Space Complexity = O(n)

/*-----------------------------Short Note on Solving the Longest Consecutive Sequence Problem:--------------------------------
• Use a Set for Fast Lookups:
    ○ Convert the array to a Set to enable O(1) lookups for each element.
• Iterate Through Each Number:
    ○ For each number, check if it's the start of a sequence (i.e., num - 1 is not in the set).
• Expand the Sequence:
    ○ If the current number is the start, check for consecutive numbers (num + 1, num + 2, etc.) and count the streak.
• Track the Longest Streak:
    ○ Keep a variable longestStreak to track the maximum sequence length found.
• Return the Longest Streak:
    ○ After iterating through all numbers, return the maximum streak length.

•Time complexity: O(n) due to the use of the set and a single pass through the array.
----------------------------------------------------------------------------------------------------------------------------*/
