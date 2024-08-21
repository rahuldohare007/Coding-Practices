function PrintUniqueElement(array) {
  //   1.
  //   const counter = {};
  //   const result = [];

  //   array.forEach((element) => {
  //     counter[element] ? counter[element]++ : (counter[element] = 1);
  //   });

  //   for (let key in counter) {
  //     result.push(Number(key));
  //   }
  //   console.log("Result: ", result);

  //   2.
  //   const result = [];
  //   const uniqueSet = new Set(array);
  //   const uniqueArray = Array.from(uniqueSet);
  //   console.log("Result: ", uniqueArray);

  //   3.
  const uniqueArray = [...new Set(array)];
  console.log("Result: ", uniqueArray);
}

const array = [1, 2, 1, 3, 4, 5, 6, 2, 4, 5, 5];

PrintUniqueElement(array);
