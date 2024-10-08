function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let countS = findOccurrence(s);
  let countT = findOccurrence(t);

  function findOccurrence(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    return obj;
  }

  for (let key in countS) {
    if (countS[key] !== countT[key]) return false;
  }
  return true;
}

const s = "anagram",
  t = "nagaram"; //true
// const s = "rat", t = "car" //false

console.log(isAnagram(s, t));

// Time Complexity = O(n)
// Space Complexity = O(n)
