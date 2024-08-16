function primechecker(number) {
  let flag = true;
  if (number <= 1) return false;
  if (number == 2) return true;

  for (let i = 3; i < Math.trunc(number / 10); i++) {
    if (number % i == 0) {
      flag = false;
      break;
    }
  }
  return flag ? true : false;
}
function SumAllPrime(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (primechecker(array[i])) {
      sum += array[i];
    }
  }
  return sum;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(SumAllPrime(array));
