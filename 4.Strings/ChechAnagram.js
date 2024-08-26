// 1.
// function CheckAnagram(str1, str2) {
//   let dummy1 = str1.trim().toLowerCase();
//   let dummy2 = str2.trim().toLowerCase();

//   let sortedstr1 = str1.split("").sort().join("");
//   let sortedstr2 = str2.split("").sort().join("");

//   if (dummy1.length !== dummy2.length) return false;
//   if (sortedstr1 == sortedstr2) return true;
//   else return false;
// }

//   2.
function CheckAnagram(str1, str2) {
  //   To remove space and make lowercase
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  if (str1.length !== str2.length) return false;

  let countStr1 = findOccurrence(str1);
  let countStr2 = findOccurrence(str2);

  function findOccurrence(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = (obj[str[i]] || 0) + 1;
    }
    return obj;
  }

  for (let key in countStr1) {
    if (countStr1[key] !== countStr2[key]) return false;
  }
  return true;
}

// let str1 = "cal";
// let str2 = "acl";

// let str1 = "ball";
// let str2 = "bal";

// let str1 = "silent";
// let str2 = "listen";

let str1 = "cat";
let str2 = "dog";

console.log(CheckAnagram(str1, str2));
