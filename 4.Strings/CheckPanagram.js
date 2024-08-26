function CheckPanagram(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();

  for (let char of alphabets) {
    if (!str.includes(char)) {
      return false;
    }
  }
  
  return true;
}

let str = "The quick brown fox jumps over the lazy dog";
console.log(CheckPanagram(str));
