//     *
//   *   *
// *       *
//   *   *
//     *

function StarPattern(number) {
  let str = "";

  //Upper half
  for (let row = 1; row <= number; row++) {
    for (let space = 1; space <= number - row; space++) {
      str += "  ";
    }

    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    str += "\n";
  }

  //Lower part
  for (let row = number - 1; row >= 1; row--) {
    for (let space = 1; space <= number - row; space++) {
      str += "  ";
    }

    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    str += "\n";
  }

  return str;
}

console.log(StarPattern(3));
