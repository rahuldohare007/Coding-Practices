function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function SumAllPrime(array) {
  //   1.
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (isPrime(array[i])) {
  //       sum += array[i];
  //     }
  //   }
  //   return sum;

  //   2.
  return array.reduce((sum, num) => {
    return isPrime(num) ? sum + num : sum;
  }, 0);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(SumAllPrime(array));
