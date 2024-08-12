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

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

console.log(romanToInt("iii")); // Output: 3
console.log(romanToInt("iv")); // Output: 4
console.log(romanToInt("ix")); // Output: 9
console.log(romanToInt("lviii")); // Output: 58
console.log(romanToInt("mcmxciv")); // Output: 1994
