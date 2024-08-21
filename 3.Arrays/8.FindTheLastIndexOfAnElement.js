function FindTheLastIndexOfAnElement(array, element) {
  let result = -1;

  //   1.
  //   for (let index = array.length - 1; index >= 0; index--) {
  //     if (array[index] === element) {
  //       result = index;
  //       break;
  //     }
  //   }

  //   2.
  result = array.lastIndexOf(element);

  return result;
}

let array = [1, 2, 3, 4, 5, 1];

console.log(FindTheLastIndexOfAnElement(array, 1));
