function removeOuterParentheses() {
  let result = "";
  let balance = 0;

  // Traverse the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // If balance is greater than 0, it's an inner '(', include it
      if (balance > 0) result += "(";
      balance++; // Increase balance for '('
    } else if (s[i] === ")") {
      balance--; // Decrease balance for ')'
      // If balance is greater than 0, it's an inner ')', include it
      if (balance > 0) result += ")";
    }
  }

  return result;
}

const s = "(()())(())";     //"()()()"
// const s = "(()())(())(()(()))"   //"()()()()(())"
// const s = "()()"        //""

console.log(removeOuterParentheses(s));

// Time Complexity = O(n)
// Space Complexity = O(n)
