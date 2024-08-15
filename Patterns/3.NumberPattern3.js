// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function NumberPattern(number) {
  if (number <= 0) return false;
  let str = "";
  let count = 0;

  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= row; col++) {
      count++;
      str += `${count}` + " ";
    }
    str += "\n";
  }

  return str;
}

console.log(NumberPattern(5));
