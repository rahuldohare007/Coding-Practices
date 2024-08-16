// * * * * *
//   * * * *
//     * * *
//       * *
//         *

function StarPattern(number) {
  let str = "";
  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number; col++) {
      if (row === 1 || col === number || row === col || col > row) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    str += "\n";
  }
  return str;
}

console.log(StarPattern(5));
