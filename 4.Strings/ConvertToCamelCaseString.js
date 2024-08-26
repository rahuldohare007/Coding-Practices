function ConvertToCamelCaseString(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toLowerCase();
    } else if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else if (str[i] !== " ") {
      result += str[i].toLowerCase();
    }
  }

  console.log(result);
}

let str = "Welcome to javascript";

ConvertToCamelCaseString(str); //welcomeToJavascript
