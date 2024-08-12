let array = [1, 2, 3, 4, 5];
let element = +prompt("Enter element to be search: ");
let result = -1;
// array.indexOf(element)
for (let i = 0; i < array.length; i++) {
  if (array[i] == element) {
    result = i;
    break;
  }
}
console.log(result);
