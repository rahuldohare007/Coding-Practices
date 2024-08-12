let array = [10, 60, 4, 8, 2, 69, -Infinity];

function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      // shifting the bigger value for 1 indexes
      array[j + 1] = array[j];
      j--;
    }
    //switch the item values to its position
    array[j + 1] = key;
  }
}

InsertionSort(array);
console.log(array);

// Time Complexity
// Best Case: O(n)
// Avg. Case: O(n^2)
// Worst Case: O(n^2)

// Space Complexity
// O(1)
