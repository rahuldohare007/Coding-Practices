function FindTheSmallestAndLargestNumber(array) {
  let smallest = array[0];
  let largest = array[0];

  // 1.
  // let smallest = Math.min(...array);
  // let largest = Math.max(...array);

  // 2.
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    } else if (array[i] < smallest) {
      smallest = array[i];
    }
  }

  return {
    smallest,
    largest,
  };
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -69];

let Result = FindTheSmallestAndLargestNumber(array);

console.log("Largest:", Result.largest);
console.log("Smallest:", Result.smallest);
