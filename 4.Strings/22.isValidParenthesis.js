function isValidParenthesis(str) {
  const stack = [];
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let char of str) {
    
    // If the current character is a closing bracket
    if (map[char]) {
      // Pop the top element from the stack
      const topElement = stack.length > 0 ? stack.pop() : "#";

      // Check if the popped element matches the corresponding opening bracket
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // If the stack is empty, all brackets were closed properly
  return stack.length === 0;
}

// Test cases
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("()[]{}")); // true
console.log(isValidParenthesis("(]")); // false
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("{[]}")); // true
console.log(isValidParenthesis("{[()]}")); // true
