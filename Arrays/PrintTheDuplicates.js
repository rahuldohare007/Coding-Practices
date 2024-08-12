let array = [1, 2, 1, 3, 4, 5, 6, 2, 4, 5, 5, 5, 6, 5];

function PrintUnique(array) {
  //   1.
  const counter = {};
  const result = [];
  array.forEach((element) => {
    counter[element] ? counter[element]++ : (counter[element] = 1);
  });

  for (let key in counter) {
    if (counter[key] > 1) {
      result.push(Number(key));
    }
    console.log(`Occurrence of ${key} is ${counter[key]}`);
  }
  console.log("Result: ", result);
}
PrintUnique(array);
