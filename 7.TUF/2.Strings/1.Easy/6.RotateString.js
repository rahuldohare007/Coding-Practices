function rotateString(s, goal) {
  if (s.length !== goal.length) return false;
  return s.concat(s).includes(goal);
}

const s = "abcde",
  goal = "cdeab"; // true

// const s = "abcde", goal = "abced" //false
console.log(rotateString(s, goal));

// Time Complexity = O(n^2)
// Space Complexity = O(n)
