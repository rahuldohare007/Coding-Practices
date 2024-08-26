// 1.
// function SendZerosToEnd(array) {
//   let result = [];
//   let zeroCount = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== 0) {
//       result.push(array[i]);
//     } else {
//       zeroCount++;
//     }
//   }

//   while (zeroCount > 0) {
//     result.push(0);
//     zeroCount--;
//   }

//   console.log("Result: ", result);
// }

// 2.
function SendZerosToEnd(array) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[lastNonZeroIndex++] = array[i];
    }
  }

  for (let i = lastNonZeroIndex; i < array.length; i++) {
    array[i] = 0;
  }

  console.log("Result: ", array);
}

let array = [1, 2, 0, 4, 0, 5, 0];

SendZerosToEnd(array);
