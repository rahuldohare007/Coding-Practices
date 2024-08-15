// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

function NumberPattern(number) {
  let str = "";
  let count = 0;

  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number; col++) {
      count++;
      str += `${count}` + " ";
    }
    str += "\n";
  }

  return str;
}

console.log(NumberPattern(5));
