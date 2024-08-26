function FindTheMissingUsingDifference(array) {
  const target = array[array.length - 1];
  let result = -1;

  for (let i = 0; i < array.length - 1; i++) {
    let difference = target - array[i];

    if (!array.includes(difference)) {
      result = difference;
      break;
    }
  }

  console.log("Missing based on difference: ", result);
}

function FindTheMissingUsingSum(array1) {
  let result = -1;
  let actualSum = 0;
  let expectedSum = 0;

  for (let index = array1[0]; index <= array1[array1.length - 1]; index++) {
    expectedSum += index;
  }

  for (let index = 0; index < array1.length; index++) {
    actualSum += array1[index];
  }

  console.log(
    "Missing in arithmetic sequence element: ",
    (result = expectedSum - actualSum)
  );
}

let array = [3, 6, 9, 15, 18];
let array1 = [1, 2, 4, 5, 6];

FindTheMissingUsingDifference(array);
FindTheMissingUsingSum(array1);
