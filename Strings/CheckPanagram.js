function CheckPanagram(str) {
  let alphabates = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();

  for (let char of alphabates) {
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
}

let str = "The quick brown fox jumps over the lazy dog";
console.log(CheckPanagram(str));
