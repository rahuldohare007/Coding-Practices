function FindTheLastIndexOfAnElement(array, element) {
  let result = -1;
  // array.lastIndexOf(element);
  
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == element) {
      result = i;
      break;
    }
  }

  return result;
}

let array = [1, 2, 3, 4, 5];
console.log(FindTheLastIndexOfAnElement(array, 5));
