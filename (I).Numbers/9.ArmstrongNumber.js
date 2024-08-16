// 1. First Approach
function ArmstrongNumber(number) {
  let sum = 0;
  let temp = number;

  while (temp > 0) {
    const digit = temp % 10;
    sum += digit ** 3;
    temp = Math.trunc(temp / 10);
  }

  return sum == number;
}
console.log(ArmstrongNumber(153));


// 2. Second Approach (Dynamically)
function ArmstrongNumber(number) {
  let sum = 0;
  let digits = String(number).length;
  let temp = number;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.trunc(temp / 10);
  }

  return sum == number;
}
console.log(ArmstrongNumber(1634));
console.log(ArmstrongNumber(370));
console.log(ArmstrongNumber(1));
