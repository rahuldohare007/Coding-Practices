function leaders(n, arr) {
  let result = [];
  let max = arr[n - 1];

  result.push(max);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= max) {
      max = arr[i];
      result.push(max);
    }
  }

  return result.reverse();
}

const n = 6,
  arr = [16, 17, 4, 3, 5, 2];
//[17 5 2]

// const n = 5,
// arr = [10, 4, 2, 4, 1];
// [10 4 4 1]

// const n = 4,
// arr = [5, 10, 20, 40];
// [40]

// const n = 4,
// arr = [30, 10, 10, 5];
// [30 10 10 5]

console.log(leaders(n, arr));

// Time Complexity = O(n)
// Space Complexity = O(n)

/*----------------------------------------Approach to solve this problem:--------------------------------------------------
• Short Note to Solve the Leaders in Array Problem:
   ○ Start from the rightmost element (always a leader).
   ○ Traverse the array backwards, comparing each element with the current maximum leader.
   ○ If an element is greater than or equal to the current leader, add it to the result and update the leader.
   ○ Reverse the result to get leaders in the original order.

• Key Steps:
   ○ Initialize max as the last element.
   ○ Loop backwards and compare.
   ○ Return the reversed result list.
---------------------------------------------------------------------------------------------------------------------------*/
