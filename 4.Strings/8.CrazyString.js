function CrazyString(str) {
  let result = "";
  let dummy = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) result += dummy[i].toUpperCase();
    else result += dummy[i];
  }

  console.log(result);
}

// let str = "jspider";
// let str = "JSPIDER";
let str = "JsiFsRsfsS";

CrazyString(str);
