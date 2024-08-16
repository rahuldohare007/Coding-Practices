let array = [10, 2, 3, 4, 5, -Infinity];

function FindSecondLargest() {
  let Min = -Infinity;
  let SMin = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < Min) {
      SMin = Min;
      Min = array[i];
    } else if (array[i] < SMin && array[i] !== Min) {
      SMin = array[i];
    }
  }
  if (SMin == -Infinity) {
    console.log("There is no second min in the given array");
  } else {
    console.log("Second Smallest: ", SMin);
  }
  console.log("Smallest: ", Min);
}
FindSecondLargest();

// Not Working
