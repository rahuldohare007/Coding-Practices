function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // Take the first string as the reference
  let prefix = strs[0];

  // Loop through all the strings in the array
  for (let i = 1; i < strs.length; i++) {
    let currentString = strs[i];

    // Compare the current prefix with each string, character by character
    while (currentString.indexOf(prefix) !== 0) {
      // Reduce the prefix by one character until it matches the start of the string
      prefix = prefix.slice(0, prefix.length - 1);
      // If there is no common prefix, return an empty string
      if (prefix === "") return "";
    }
  }

  return prefix;
}

const strs = ["flower", "flow", "flight"];
// const strs = ["dog","racecar","car"] //""

console.log(longestCommonPrefix(strs)); //"fl"

/*
• Time Complexity
The time complexity of the longestCommonPrefix function is O(S), where S is the sum of all characters in all the strings in the input array.

○ Let 𝑛 be the number of strings in the input array.
○ Let 𝑚 be the average length of the strings.

In the worst case:
○ We iterate over all strings in the array (n strings).
○ For each string, we compare characters up to the length of the prefix (which could be as long as the shortest string, hence at most m characters).
Thus, the overall time complexity is O(n * m), but in terms of the total number of characters processed, this can be represented as O(S), where S = ∑ n  i=1   (len(strs[i])).

• Space Complexity
The space complexity of the function is O(1), as we only use a few variables for storing the prefix and some loop variables, which require constant space.

○ In-Place Operations: The function operates in place without using any additional data structures that depend on the input size.
Thus, the space complexity is constant, O(1).

• Summary:
Time complexity: O(S), where 𝑆 is the sum of all characters across the input strings.
Space complexity: O(1) (constant space).
*/
