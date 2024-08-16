function isPrime(number) {
  if (number <= 1) return false;
  if (number == 2) return true;
  if (number % 2 == 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function Print10PrimeNumberInAGivenRange(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i) && result.length < 10) {
        result.push(i);
    }
  }
  return result;
}

console.log(Print10PrimeNumberInAGivenRange(10, 100));
