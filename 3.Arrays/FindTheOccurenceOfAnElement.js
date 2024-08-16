let array = [1, 2, 3, 1, 5, 1];

function FindOccurrence(array, element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      count++;
    }
  }
  if (count == 0) {
    console.log("Element has no occurrence in the given array");
  }
  else{
    console.log("Count: ", count)
  }
}

FindOccurrence(array, 1);
FindOccurrence(array, 69);
FindOccurrence(array, 5);

