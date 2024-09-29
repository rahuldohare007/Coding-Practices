//---------------------------------------------------------First Approach------------------------------------------------
// Time Complexity = O(n)
// Space Complexity = O(1)
function nextPermutation(nums) {
  let n = nums.length;
  let i = n - 2;
  // Step 1: Find the first decreasing element from the end
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    // Step 2: Find the next largest element to swap
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    // Step 3: Swap them
    swap(nums, i, j);
  }
  // Step 4: Reverse the part after the swapped element
  reverse(nums, i + 1);
}
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
function reverse(nums, start) {
  let end = nums.length - 1;
  while (start < end) {
    swap(nums, start++, end--);
  }
}

//---------------------------------------------------------Second Approach------------------------------------------------
// Time Complexity = O(n)
// Space Complexity = O(1)
function nextPermutation(nums) {
  let ind = -1;
  let len = nums.length - 1;

  for (i = len - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind = i;
      break;
    }
  }

  if (ind == -1) return nums.reverse();

  for (let i = len; i >= ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[ind], nums[i]] = [nums[i], nums[ind]];
      break;
    }
  }

  let arr = nums.splice(ind + 1, len).reverse();

  return nums.push(...arr);
}

const nums = [1, 2, 3]; //[1,3,2]
// const  nums = [3,2,1]  //[1,3,2]
// const nums = [1,1,5] //[1,5,1]

nextPermutation(nums);
console.log(nums);

/*--------------------------------------------Approach to Solve Next Permutation:--------------------------------------------
• Find First Decreasing Element:
    ○ Traverse the array from right to left.
    ○ Find the first element nums[i] where nums[i] < nums[i + 1]. This identifies the point where the order needs to change to get the next permutation.
• Edge Case:
    ○ If no such element is found (i.e., the array is in descending order), simply reverse the array as it is the last permutation.
• Find the Next Larger Element:
    ○ From the end of the array, find the first element nums[j] that is larger than nums[i] and swap nums[i] and nums[j].
• Reverse the Subarray:
    ○ Reverse the part of the array after index i to ensure the smallest possible permutation after the swap.
This approach ensures the next lexicographical permutation is generated in O(n) time and O(1) space.

• Steps in Code:
   ○ Find ind, the first decreasing element.
   ○ Swap with the next larger element from the right.
   ○ Reverse the remaining elements after ind.
---------------------------------------------------------------------------------------------------------------------------*/
