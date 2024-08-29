// 1.
function HighestLengthWord(str) {
  let words = str.split(" ");
  let maxWord = "";

  for (let word of words) {
    // words.forEach((word) => { same });

    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }

  console.log(
    `The longest word is '${maxWord}' with a length of ${maxWord.length}`
  );
}

// 2.
function HighestLengthWord(str) {
  let words = str.split(" ");

  let maxWord = words.sort((a, b) => b.length - a.length)[0];

  console.log(
    `The longest word is '${maxWord}' with a length of ${maxWord.length}`
  );
}

let str = "Hello my name is Salman Bhai";

HighestLengthWord(str);
