function SelectionSort(array) {
  let arraySize = array.length;

  for (let i = 0; i < arraySize - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arraySize; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }

  return array;
}

let array = [40, 69, 1, 8, -Infinity, Infinity, 100];
SelectionSort(array);

console.log(array);

// Time Complexity
// Best Case: O(n^2)
// Avg. Case: O(n^2)
// Worst Case: O(n^2)

// Space Complexity
// O(1)
