// * * * * *
//   * * *
//     *

function StarPattern(number) {
  let str = "";
  for (let row = 0; row < number; row++) {
    //Adding leading spaces
    for (let space = 0; space < row; space++) {
      str += "  ";
    }

    //Adding stars
    for (let star = 0; star < 2 * (number - row) - 1; star++) {
      str += "* ";
    }

    str += "\n";
  }

  return str;
}

console.log(StarPattern(3));
