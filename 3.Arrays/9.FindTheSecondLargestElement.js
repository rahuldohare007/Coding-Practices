// 1.
// function FindSecondLargest(array) {
//   let MAX = -Infinity;
//   let SMAX = -Infinity;

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > MAX) {
//       SMAX = MAX;
//       MAX = array[index];
//     } else if (array[index] > SMAX && array[index] !== MAX) {
//       SMAX = array[index];
//     }
//   }

//   if (SMAX === -Infinity) {
//     console.log("There is no second largest element");
//   } else {
//     console.log("Max: ", MAX);
//     console.log("Second Max: ", SMAX);
//   }

// }

// 2.
function FindSecondLargest(array) {
  const uniqueArray = [...new Set(array)];

  if (uniqueArray.length < 2) {
    console.log("There is no second largest element");
  } else {
    uniqueArray.sort((a, b) => b - a);
    console.log("Largest Element: ", uniqueArray[0]);
    console.log("Second Largest Element: ", uniqueArray[1]);
  }
}

let array = [10, 2, 3, 4, 5, Infinity, Infinity];

FindSecondLargest(array);
