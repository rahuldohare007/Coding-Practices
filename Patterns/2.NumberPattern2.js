// 1 2 3 4 5
// 5 4 3 2 1
// 1 2 3 4 5
// 5 4 3 2 1
// 1 2 3 4 5

function NumberPattern(number) {
  if (number <= 0) return false;
  let str = "";
  let count = 1;

  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number; col++) {
      if (!(row % 2 == 0)) {
        str += `${count}` + " ";
        count++;
      } else {
        count--;
        str += `${count}` + " ";
      }
    }
    str += "\n";
  }

  return str;
}

console.log(NumberPattern(9));
