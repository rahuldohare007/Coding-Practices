let array = [1, "a", 2, "b", 3, "c", "15"];
let numbers = [];
let strings = [];

for (let i = 0; i < array.length; i++) {
  //   if (array[i] === Number(array[i])) {  //=== is important
  //     numbers.push(array[i]);
  //   } else if (array[i] === String(array[i])) {
  //     strings.push(array[i]);
  //   }

  if (typeof array[i] === "number") {
    numbers.push(array[i]);
  } else if (typeof array[i] === "string") {
    strings.push(array[i]);
  }
}

console.log("Numbers: ", numbers);
console.log("Strings: ", strings);
