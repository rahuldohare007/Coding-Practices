function PlaceTheCharactersInString(str1, str2) {
  let str2Index = 0;
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    if (isNaN(str1[i])) {
      result += str1[i];
    } else {
      result += str2[str2Index];
      str2Index++;
    }
  }

  console.log(result);
}

let str1 = "J1V2SCR3P4";
let str2 = "AAIT";

PlaceTheCharactersInString(str1, str2); //JAVASCRIPT
