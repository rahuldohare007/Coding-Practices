// 1.
// function FindSecondSmallest(array) {
//   let MIN = Infinity;
//   let SMIN = Infinity;

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] < MIN) {
//       SMIN = MIN;
//       MIN = array[index];
//     } else if (array[index] < SMIN && array[index] !== MIN) {
//       SMIN = array[index];
//     }
//   }

//   if (SMIN === Infinity) {
//     console.log("There is no second smallest element");
//   } else {
//     console.log("Smallest: ", MIN);
//     console.log("Second Smallest: ", SMIN);
//   }
// }

// 2.
function FindSecondSmallest(array) {
  const uniqueArray = [...new Set(array)];

  if (uniqueArray.length < 2) {
    console.log("There is no second smallest element");
  } else {
    uniqueArray.sort((a, b) => a - b);
    console.log("Smallest Element: ", uniqueArray[0]);
    console.log("Second Smallest Element: ", uniqueArray[1]);
  }
}

let array = [10, 2, 3, 4, 5, -Infinity, -Infinity];

FindSecondSmallest(array);
