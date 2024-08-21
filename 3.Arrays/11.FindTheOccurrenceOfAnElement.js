// 1.
// function FindOccurrence(array, element) {
//   let count = 0;

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === element) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     console.log(`${element} has no occurrence`);
//   } else {
//     return console.log(`Occurrence of ${element} : ${count}`);
//   }
// }

// 2.
function FindOccurrence(array, element) {
  const count = array.filter((item) => item === element).length;

  if (count === 0) {
    console.log(`${element} has no occurrence`);
  } else {
    return console.log(`Occurrence of ${element} : ${count}`);
  }
}

let array = [1, 2, 3, 1, 5, 1];

FindOccurrence(array, 1);
