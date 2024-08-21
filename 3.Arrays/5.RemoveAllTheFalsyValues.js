function RemoveAllTheFalsyValues(array) {
  let result = [];

  //   1.
  //   for (let index = 0; index < array.length; index++) {
  //     let falsy = Boolean(array[index]);
  //     if (falsy) {
  //       result.push(array[index]);
  //     }
  //   }

  //   2.
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      result.push(array[index]);
    }
  }

  return result;
}

let array = [1, 0, 5, null, "abc", "", NaN, "0"];
console.log(RemoveAllTheFalsyValues(array));
