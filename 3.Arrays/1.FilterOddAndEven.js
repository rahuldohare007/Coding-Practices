function FilterOddAndEven(array) {
  let even = [];
  let odd = [];

  //1.
  array.forEach((item) => {
    if (item % 2 === 0) even.push(item);
    else {
      odd.push(item);
    }
  });

  //2.
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] % 2 == 0) {
  //       even.push(array[i]);
  //     } else {
  //       odd.push(array[i]);
  //     }
  //   }

  return {
    even,
    odd,
  };
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Result = FilterOddAndEven(array);

console.log("Even: ", Result.even);
console.log("Odd: ", Result.odd);
