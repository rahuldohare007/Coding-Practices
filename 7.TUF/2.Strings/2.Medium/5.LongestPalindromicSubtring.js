function longestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0,
    end = 0;

  const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
}

console.log(longestPalindrome(s));

const s = "babad"; //"bab"
// Explanation: "aba" is also a valid answer.

// const s = "cbbd" // "bb"

// Time Complexity = O(n^2)
// Space Complexity = O(1)

/*-------------------------------Approach to Solve Longest Palindromic Substring---------------------------------------
• Expand Around Center:
    ○ The idea is to consider each character and each pair of adjacent characters as possible centers of a palindrome.
    ○ For each center, expand outwards to check if the characters match on both sides (left and right).
• Steps:
   ○ For every index i in the string, check two cases:
       ◘ Palindromes with odd length (expand around one center, i).
       ◘ Palindromes with even length (expand around two centers, i and i+1).
   ○ Track the start and end indices of the longest palindrome found during this process.
• Complexity:
   ○ Time Complexity: O(n²), where n is the length of the string because we are expanding for every character.
   ○ Space Complexity: O(1), since no extra space is used except for variables.
---------------------------------------------------------------------------------------------------------------------*/
