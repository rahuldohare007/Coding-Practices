let array = [1, [2, [8, [3, [4, 5]], [6, 7]]]];

function FlaternArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      FlaternArray(array[i]);
    } else {
      result.push(array[i]);
    }
  }
  console.log("Result: ", result);
}
FlaternArray(array);
