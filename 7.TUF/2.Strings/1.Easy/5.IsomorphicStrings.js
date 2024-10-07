function isIsomorphic(s, t) {
  const mapS = new Map();
  const mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!mapS.has(s[i])) mapS.set(s[i], t[i]);
    else if (mapS.get(s[i]) !== t[i]) return false;

    if (!mapT.has(t[i])) mapT.set(t[i], s[i]);
    else if (mapT.get(t[i]) !== s[i]) return false;
  }
  return true;
}

const s = "egg",
  t = "add"; //true
/*
-----------------Explanation:---------------
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
*/
// const s = "foo", t = "bar" //false
// const s = "paper", t = "title" //true

console.log(isIsomorphic(s, t));

// Time Complexity = O(n)
// Space Complexity = O(n)
