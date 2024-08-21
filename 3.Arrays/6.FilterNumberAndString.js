function FilterNumberAndString() {
  let numbers = [];
  let strings = [];

  //   1.
  //   for (let index = 0; index < array.length; index++) {
  //     if (typeof array[index] === "number") {
  //       numbers.push(array[index]);
  //     } else if (typeof array[index] === "string") {
  //       strings.push(array[index]);
  //     }
  //   }

  //   2.
  //   for (let index = 0; index < array.length; index++) {
  //     if (array[index] === Number(array[index])) {
  //       numbers.push(array[index]);
  //     } else if (array[index] === String(array[index])) {
  //       strings.push(array[index]);
  //     }
  //   }

  //   3.
  //   array.filter((item) => {
  //     if (typeof item === "number") {
  //       numbers.push(item);
  //     } else if (typeof item === "string") {
  //       strings.push(item);
  //     }
  //   });

  //   4.
  array.forEach((item) => {
    if (typeof item === "number") {
      numbers.push(item);
    } else if (typeof item === "string") {
      strings.push(item);
    }
  });

  return {
    numbers,
    strings,
  };
}

let array = [1, "a", 2, "b", 3, "c", "15"];

let Result = FilterNumberAndString(array);
console.log("Numbers: ", Result.numbers);
console.log("Strings: ", Result.strings);
