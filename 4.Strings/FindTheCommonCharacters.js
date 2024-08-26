function FindTheCommonCharacters(str1, str2) {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i]) && result.indexOf(str1[i]) === -1) {
      result += str1[i];
    }
  }

  console.log(result);
}

const str1 = "abampx";
const str2 = "acdep";

FindTheCommonCharacters(str1, str2);
