function StrongNumber(number) {
  let factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

  let sum = 0;
  let temp = number;

  while (temp > 0) {
     digit = temp % 10;
    sum += factorials[digit];
    temp = Math.trunc(temp / 10);
  }
  return sum == number
}

console.log(StrongNumber(145));
