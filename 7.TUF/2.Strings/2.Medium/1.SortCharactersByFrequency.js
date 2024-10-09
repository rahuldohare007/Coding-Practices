function frequencySort(s) {
  // Step 1: Count frequency of each character
  const frequencyMap = {};
  for (let char of s) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Step 2: Sort characters based on their frequency
  const sortedChars = Object.keys(frequencyMap).sort(
    (a, b) => frequencyMap[b] - frequencyMap[a]
  );

  // Step 3: Build the result string
  let result = "";
  for (let char of sortedChars) {
    result += char.repeat(frequencyMap[char]);
  }

  return result;
}

const s = "tree"; //"eert"
/* Explanation: 'e' appears twice while 'r' and 't' both appear once.
 So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.*/

// const s = "cccaaa" //"aaaccc"
/*Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.*/

// const s = "Aabb" //"bbAa"
/*Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.*/

console.log(frequencySort(s));

// Time Complexity: O(n + k log k), where n is the length of the string (for counting frequency), and k is the number of unique characters (for sorting).
// Space Complexity: O(n) for the frequency map and the result string.
