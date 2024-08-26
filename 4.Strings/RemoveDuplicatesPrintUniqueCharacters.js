// 1.
function RemoveDuplicates(str) {
  let frequency = {};
  let unique = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") {
      frequency[char] ? frequency[char]++ : (frequency[char] = 1);
    }
  }

  for (let key in frequency) {
    unique += key;
  }

  console.log(unique);
}

// 2.
function RemoveDuplicates(str) {
  let unique = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Skip spaces
    if (char === " ") continue;

    // Check if the character is already in the unique string
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === char) {
        isDuplicate = true;
        break;
      }
    }

    // If it's not a duplicate, add it to the unique string
    if (!isDuplicate) {
      unique += char;
    }
  }

  console.log(unique);
}

let str = "abcabdeac aecerc";
RemoveDuplicates(str);
