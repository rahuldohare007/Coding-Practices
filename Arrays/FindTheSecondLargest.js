let array = [10, 2, 3, 4, 5, Infinity];
function FindSecondLargest() {
  let Max = -Infinity;
  let SMax = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > Max) {
      SMax = Max;
      Max = array[i];
    } else if (array[i] > SMax && array[i] !== Max) {
      SMax = array[i];
    }
  }
  if (SMax == -Infinity) {
    console.log("There is no second max in the given array");
  } else {
    console.log("Second Largest: ", SMax);
  }
  console.log("Largest: ", Max);
}
FindSecondLargest();
