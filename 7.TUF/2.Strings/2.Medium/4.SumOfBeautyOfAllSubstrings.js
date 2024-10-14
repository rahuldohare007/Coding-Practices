function beautySum(s) {
  let totalBeauty = 0;

  for (let i = 0; i < s.length; i++) {
    let freq = new Array(26).fill(0);

    for (let j = i; j < s.length; j++) {
      freq[s[j].charCodeAt() - "a".charCodeAt()]++;

      let minFreq = Number.MAX_SAFE_INTEGER;
      let maxFreq = 0;

      for (let count of freq) {
        if (count > 0) {
          minFreq = Math.min(minFreq, count);
          maxFreq = Math.max(maxFreq, count);
        }
      }

      totalBeauty += maxFreq - minFreq;
    }
  }

  return totalBeauty;
}

const s = "aabcb"; //5
// Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.

// const s = "aabcbaa" //17

console.log(beautySum(s));

// Time Complexity = O(n ^ 2)
// Space Complexity = O(1)

/*--------------------------------------------------Approach----------------------------------------------------------
• Problem Understanding: Calculate the sum of beauty for all substrings, where beauty is the difference between the most frequent and least frequent characters in each substring.

• Key Approach:
   ○ Use a frequency array of size 26 (for lowercase letters) to track character frequencies.
   ○ For each starting index i, expand the substring to index j and update the frequency array.
   ○ Calculate the beauty by finding the difference between the maximum and minimum frequencies in the substring.

• Time Complexity: O(n²) due to checking all substrings.
• Space Complexity: O(1) using a fixed-size frequency array.
------------------------------------------------------------------------------------------------------------------------*/
