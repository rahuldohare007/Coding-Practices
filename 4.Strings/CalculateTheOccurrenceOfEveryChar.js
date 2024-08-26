// 1.
function CalculateTheOccurrenceOfEveryCharacter(str) {
  let frequency = {};

  for (let char of str) {
    if (char !== " ") {
      frequency[char] ? frequency[char]++ : (frequency[char] = 1);
      //   frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  for (let key in frequency) {
    console.log(`Occurrence of char ${key} is ${frequency[key]}`);
  }
}

// 2.
function CalculateTheOccurrenceOfEveryCharacter(str) {
  let frequency = str.split("").reduce((acc, char) => {
    if (char !== " ") {
      acc[char] = (acc[char] || 0) + 1;
    }
    return acc;
  }, {});

  for (let key in frequency) {
    console.log(`Occurrence of char ${key} is ${frequency[key]}`);
  }
}

let str = "Hello World!";

CalculateTheOccurrenceOfEveryCharacter(str);
