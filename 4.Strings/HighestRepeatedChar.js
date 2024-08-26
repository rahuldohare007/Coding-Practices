// 1.
function HighestRepeatedChar(str) {
  let maxRepeatChar = "";
  let maxCount = 0;

  while (str.length > 0) {
    let newStr = "";
    let char = str[0];
    let count = 1;

    // Count occurrences of the current character
    for (let i = 1; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      } else {
        newStr += str[i];
      }
    }

    // Update the string to exclude the counted character
    str = newStr;

    // Update maxCount and maxRepeatChar if this character has the highest count so far
    if (count > maxCount) {
      maxCount = count;
      maxRepeatChar = char;
    }
  }

  console.log(`Max repeated character is '${maxRepeatChar}' with a count of ${maxCount}`);
}

// 2.
function HighestRepeatedChar(str) {
  let frequency = {};
  let maxCount = 0;
  let maxRepeatChar = "";


  for (let char of str) {
    if (char !== " ") {
      frequency[char] = (frequency[char] || 0) + 1;

      if (frequency[char] > maxCount) {
        maxCount = frequency[char];
        maxRepeatChar = char;
      }
    }
  }

  console.log(
    `Max repeated character is '${maxRepeatChar}' with a count of ${maxCount}`
  );
}

let str = "abcabdaebdcb eefe";

HighestRepeatedChar(str);
