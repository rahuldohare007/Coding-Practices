let str = "aabbcccaaddda";
let result = "";

// 1.
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   let count = 1;
//   console.log(str[i - 1]);
//   if (char == str[i - 1]) continue;
//   for (let j = i + 1; j < str.length; j++) {
//     if (char == str[j]) count++;
//     else break;
//   }
//   result += char + count;
// }
// console.log(result);

// 2.
// while (str.length > 0) {
//   let newStr = "";
//   let char = str[0];
//   let count = 1;
//   let flag = true;
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] == char && flag) {
//       count++;
//     } else {
//       newStr += str[i];
//       flag = false;
//     }
//   }
//   str = newStr;
//   result += char + count;
// }

// console.log(result);

// 3.
let counted = {}
for(let i = 0; i< str.length; i++){
    if(counted[str[i]]) continue
    let count = 0
    for(let j=0; j<str.length; j++){
        if(str[i] == str[j]) count++
    }
    counted[str[i]] = true
    
}