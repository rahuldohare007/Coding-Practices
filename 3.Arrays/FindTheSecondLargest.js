// 1.
// function findSecondLargest() {
//   let Max = -Infinity;
//   let SMax = -Infinity;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > Max) {
//       SMax = Max;
//       Max = array[i];
//     } else if (array[i] > SMax && array[i] !== Max) {
//       SMax = array[i];
//     }
//   }
//   if (SMax == -Infinity) {
//     console.log("There is no second max in the given array");
//   } else {
//     console.log("Second Largest: ", SMax);
//   }
//   console.log("Largest: ", Max);
// }

// 2.
function findSecondLargest() {
  const uniqueArray = [...new Set(array)]; // Remove duplicates
  if (uniqueArray.length < 2) {
    console.log("There is no second max in the given array");
    return;
  }

  uniqueArray.sort((a, b) => b - a);
  console.log("Largest: ", uniqueArray[0]);
  console.log("Second Largest: ", uniqueArray[1]);
}

let array = [10, 2, 3, 4, 5, Infinity, Infinity];
findSecondLargest();
