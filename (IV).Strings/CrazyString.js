// let str = "jspider";
// let str = "JSPIDER";
let str = "JsiFsRsfsS";

let result = "";
function CrazyString(str) {
  let dummy = str.toLowerCase();
  console.log(dummy);
  for (let i = 0; i < dummy.length; i++) {
    if (i % 2 == 0) result += dummy[i].toUpperCase();
    else result += dummy[i];
  }
  console.log(result);
}
CrazyString(str);
