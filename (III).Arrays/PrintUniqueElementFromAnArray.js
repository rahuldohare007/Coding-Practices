let array = [1, 2, 1, 3, 4, 5, 6, 2, 4, 5, 5];

function PrintUnique(array) {
  //   1.
  const counter = {};
  const result = [];
  array.forEach((element) => {
    counter[element] ? counter[element]++ : (counter[element] = 1);
  });

  for (let key in counter) {
    result.push(Number(key));
    console.log(`Occurrence of ${key} is ${counter[key]}`);
  }
  console.log("Result: ", result);

  //   2.
  let uniqueSet = new Set(array);
  let uniqueArray = Array.from(uniqueSet);
  console.log("Result: ", uniqueArray);
}
PrintUnique(array);
