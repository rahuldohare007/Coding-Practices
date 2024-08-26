function MergeTwoArrays(array1, array2) {
  let result = [];
  //   1.
  //   console.log(array1.concat(array2));

  //   2.
  //   console.log([...array1, ...array2]);

  //   3.
  for (let index = 0; index < array1.length; index++) {
    result.push(array1[index]);
  }
  for (let index = 0; index < array2.length; index++) {
    result.push(array2[index]);
  }

  console.log(result);
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

MergeTwoArrays(array1, array2);
