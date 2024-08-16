let array = [1, 2, 1, 3, 4, 5, 6, 69, 2, 3, 4, 5];

function FindTheOccurrenceOfEveryElement(array) {
  const counter = {};
  array.forEach((element) => {
    counter[element] ? counter[element]++ : (counter[element] = 1);
  });

  for (let key in counter) {
    console.log(`Occurrence of ${key} is ${counter[key]}`);
  }
  //   console.log("Counter: ", counter);
}
FindTheOccurrenceOfEveryElement(array);
