//     *
//   * * *
// * * * * *
//   * * *
//     *

function StarPattern(number) {
  let str = "";

  //Upper half
  for (let row = 1; row <= number; row++) {
    //Adding leading spaces
    for (let space = 1; space <= number - row; space++) {
      str += "  ";
    }

    //Adding star for upper half
    for (let col = 0; col < 2 * row - 1; col++) {
      str += "* ";
    }

    str += "\n";
  }

  //Lower part
  for (let row = number - 1; row >= 1; row--) {
    //Adding leading spaces
    for (let space = 1; space <= number - row; space++) {
      str += "  ";
    }

    //Adding star for lower part
    for (let col = 0; col < 2 * row - 1; col++) {
      str += "* ";
    }

    str += "\n";
  }

  return str;
}

console.log(StarPattern(3));
