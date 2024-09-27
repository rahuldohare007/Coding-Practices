function findUnion(arr1, arr2, n, m) {
  const result = [];
  let i = 0,
    j = 0;

  n = arr1.length;
  m = arr2.length;

  // Traverse both arrays
  while (i < n && j < m) {
    // If the current element of arr1 is smaller, add it to the result
    if (arr1[i] < arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    }
    // If the current element of arr2 is smaller, add it to the result
    else if (arr1[i] > arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    }
    // If the elements are equal, add one of them to the result and move both pointers
    else {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  // Add the remaining elements of arr1 (if any)
  while (i < n) {
    if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  // Add the remaining elements of arr2 (if any)
  while (j < m) {
    if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
}

const n = 5,
  arr1 = [1, 2, 3, 4, 5];
(m = 5), (arr2 = [1, 2, 3, 6, 7]);

console.log(findUnion(arr1, arr2, n, m)); //[1,2,3,4,5,6,7]

// Time Complexity = O(n + m)
// Space Complexity = O(n + m)

/*--------------------------------------------------------NOTE------------------------------------------------------
Approach:
• Initialize two pointers: One for each array (i for array1 and j for array2).
• Compare the elements at the current pointers:
  ○ If the element in array1 is smaller, add it to the result and move pointer i.
  ○ If the element in array2 is smaller, add it to the result and move pointer j.
  ○ If both elements are equal, add one of them to the result (to ensure distinct elements) and move both pointers.
• Handle the remaining elements: After one of the arrays is fully traversed, add the remaining elements from the other array to the result.
• Return the result.
---------------------------------------------------------------------------------------------------------------------*/
