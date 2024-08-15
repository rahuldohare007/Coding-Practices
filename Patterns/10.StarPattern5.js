// *
// * *
// * * *
// * * * *
// * * * * *

function StarPattern(number) {
  let str = "";
  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= row; col++) {
      if (col === 1 || row === number || row === col || row > col) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    str += "\n";
  }
  return str;
}

console.log(StarPattern(7));
