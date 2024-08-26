function RomanStringToNumber(str) {
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

  for (let i = 0; i < str.length; i++) {
    const currentVal = romanMap[str[i]];
    const nextVal = romanMap[str[i + 1]];

    if (nextVal && nextVal > currentVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
}

console.log(RomanStringToNumber("III")); // Output: 3
console.log(RomanStringToNumber("IV")); // Output: 4
console.log(RomanStringToNumber("IX")); // Output: 9
console.log(RomanStringToNumber("LVIII")); // Output: 58
console.log(RomanStringToNumber("MCMXCIV")); // Output: 1994

console.log(RomanStringToNumber("iii")); // Output: 3
console.log(RomanStringToNumber("iv")); // Output: 4
console.log(RomanStringToNumber("ix")); // Output: 9
console.log(RomanStringToNumber("lviii")); // Output: 58
console.log(RomanStringToNumber("mcmxciv")); // Output: 1994
