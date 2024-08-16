//  *
//  * *
//  * * *
//  * *
//  *

function StarPattern(number) {
  let str = "";
  for (let row = 1; row <= 2 * number - 1; row++) {
    for (let col = 1; col <= number; col++) {
      if (row <= number) {
        if (col <= row) {
          str += " *";
        }
      } else {
        if (2 * number - row >= col) {
          str += " *";
        }
      }
    }
    str += "\n";
  }
  return str;
}

console.log(StarPattern(3));
