let array = [1, 2, 3, 4, 5];
let element = +prompt("Enter element to be search: ");
let result = -1;

for (let i = array.length - 1; i >= 0; i--) {
  if (array[i] == element) {
    result = i;
    break;
  }
}
  console.log(result);