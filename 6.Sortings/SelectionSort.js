let array = [40, 69, 1, 8, -Infinity, Infinity, 100];
let arraySize = array.length;

function SelectionSort(array) {
  for (let i = 0; i < arraySize - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arraySize; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
  return array;
}

SelectionSort(array);
console.log(array);

// Time Complexity
// Best Case: O(n^2)
// Avg. Case: O(n^2)
// Worst Case: O(n^2)

// Space Complexity
// O(1)
