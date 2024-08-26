function CheckPanagram(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let temp = str.toLowerCase();

  for (let char of alphabets) {
    if (!temp.includes(char)) {
      return false;
    }
  }

  return true;
}

let str = "The quick brown fox jumps over the lazy dog";

console.log(CheckPanagram(str));