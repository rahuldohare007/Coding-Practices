function FindTheCommonCharacters(str1, str2) {
  let result = "";

  for (let char of str1) {
    if (str2.includes(char) && result.indexOf(char) === -1) {
      result += char;
    }
  }

  console.log(result);
}

const str1 = "abampx";
const str2 = "acdep";

FindTheCommonCharacters(str1, str2);
