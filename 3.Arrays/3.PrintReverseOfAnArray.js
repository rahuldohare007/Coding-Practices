function PrintReverseOfAnArray(array) {
  let result = [];

  //   1.
  array.reverse().forEach((element) => {
    result.push(element);
  });

  //   2.
  //   for (let index = 0; index < array.length; index++) {
  //     result.unshift(array[index]);
  //   }

  //   3.
  //   for (let index = array.length - 1; index >= 0; index--) {
  //     result.push(array[index]);
  //   }

  return result;
}

let array = [1, 2, 3, 4, 5, 11, 6, 7, 8, 9, 10, -69];

console.log(PrintReverseOfAnArray(array));
