function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

const s = "the sky is blue"; //"blue is sky the"
// const s = "  hello world  "  //"world hello"
// const s = "a good   example" //"example good a"

console.log(reverseWords(s));

// Time Complexity = O(n)
// Space Complexity = O(n)
