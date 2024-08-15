function FindTheIndexOfAnElement(array, element) {
  let result = -1;
  // array.indexOf(element)
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      result = i;
      break;
    }
  }

  return result;
}

let array = [1, 2, 3, 4, 5];
console.log(FindTheIndexOfAnElement(array, 5));
