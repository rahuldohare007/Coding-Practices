function FindTheIndexOfAnElement(array, element) {
  let result = -1;

  //   1.
  //   for (let index = 0; index < array.length; index++) {
  //     if (array[index] === element) {
  //       result = index;
  //       break;
  //     }
  //   }

  //   2.
  //   result = array.findIndex((item) => item === element);

  //   3.
  result = array.indexOf(element);

  return result;
}

let array = [1, 2, 3, 4, 5, 1];

console.log(FindTheIndexOfAnElement(array, 1));
