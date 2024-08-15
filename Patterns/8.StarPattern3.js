// *       * 
//   *   *   
//     *     
//   *   *   
// *       * 

function StarPattern(number) {
  let str = "";
  for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number; col++) {
      if (row === col || row + col === number + 1) {
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
