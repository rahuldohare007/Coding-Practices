//     *
//   * * *
// * * * * *

function StarPattern(number) {
  let str = "";

  for (let row = 1; row <= number; row++) {
    //Adding leading spaces
    for (let space = 1; space <= number - row; space++) {
      str += "  ";
    }

    //Adding stars
    for (let col = 0; col < 2 * row - 1; col++) {
      str += "* ";
    }

    str += "\n";
  }

  return str;
}

console.log(StarPattern(3));
