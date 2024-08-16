//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5

function NumberPattern(number) {
  if (number <= 0) return false;
  let str = "";

  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number; col++) {
      str += `${col}` + " ";
    }
    str += "\n";
  }

  return str;
}

console.log(NumberPattern(10))
