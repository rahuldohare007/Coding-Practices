function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]];
    const nextVal = romanMap[s[i + 1]];

    if (nextVal && nextVal > currentVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
}
const s = "III"; //3
// Explanation: III = 3.

// const s = "LVIII" //58
// Explanation: L = 50, V= 5, III = 3.

// const s = "MCMXCIV" //1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

console.log(romanToInt(s));

// Time Complexity = O(n)
// Space Complexity = O(1)