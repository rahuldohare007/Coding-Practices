// 1.
function PrintTheDuplicates(array) {
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

// 2.
// function PrintTheDuplicates(array) {
//   const counter = new Map();
//   const result = [];

//   array.forEach((element) => {
//     counter.set(element, (counter.get(element) || 0) + 1);
//   });

//   counter.forEach((value, key) => {
//     if (value > 1) {
//       result.push(key);
//     }
//     console.log(`Occurrence of ${key} is ${value}`);
//   });

//   console.log("Result: ", result);
// }

// 3.
// function PrintTheDuplicates(array) {
//   const seen = new Set();
//   const duplicates = new Set();

//   array.forEach((element) => {
//     if (seen.has(element)) {
//       duplicates.add(element);
//     } else {
//       seen.add(element);
//     }
//   });

//   duplicates.forEach((element) => {
//     const occurrence = array.filter((item) => item === element).length;
//     console.log(`Occurrence of ${element} is ${occurrence}`);
//   });

//   console.log("Result: ", Array.from(duplicates));
// }

let array = [1, 2, 1, 3, 4, 5, 6, 2, 4, 5, 5, 5, 6, 5];

PrintTheDuplicates(array);
