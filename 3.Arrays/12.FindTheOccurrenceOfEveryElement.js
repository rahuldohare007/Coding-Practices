function FindTheOccurrenceOfEveryElement(array) {
  const counter = {};

  array.forEach((element) => {
    counter[element] ? counter[element]++ : (counter[element] = 1);
  });

  //   console.log("Counter: ", counter);

  for (let key in counter) {
    console.log(`Occurrence of ${key} is ${counter[key]}`);
  }
}

let array = [1, 2, 1, 3, 4, 69, 69, 2, 3, 4, 5, 1];

FindTheOccurrenceOfEveryElement(array);
