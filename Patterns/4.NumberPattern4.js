// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function NumberPattern(number) {
  let str = "";
  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= row; col++) {
      str += `${col}` + " ";
    }
    str += "\n";
  }

  return str;
}
console.log(NumberPattern(5));
