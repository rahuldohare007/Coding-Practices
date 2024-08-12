let array = [40, 69, 1, 8, -Infinity, Infinity, 100];
let arraySize = array.length;

function BubbleSort1(array) {
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = 0; j < arraySize - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function BubbleSort2(array) {
  let flag = false;
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = 0; j < arraySize - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  return array;
}

BubbleSort1(array);
BubbleSort2(array);
console.log(array);

// Time Complexity
// Best Case: O(n^2)
// Avg. Case: O(n^2)
// Worst Case: O(n^2)

// Space Complexity
// O(1)
