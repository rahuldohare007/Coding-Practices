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

function PrintSecondLargestAndSecondLeastPrimeNumber(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  const SecondLeast = result[1];
  const SecondLargest = result[result.length - 2];
  return {
    SecondLeast,
    SecondLargest,
  };
}

let FinalResult = PrintSecondLargestAndSecondLeastPrimeNumber(10, 100);
console.log("Second Least Prime Number", FinalResult.SecondLeast);
console.log("Second Largest Prime Number", FinalResult.SecondLargest);
