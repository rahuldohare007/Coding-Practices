let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -69];
let largest = array[0];
let smallest = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  } else if (array[i] < smallest) {
    smallest = array[i];
  }
}
console.log("Largest:", largest);
console.log("Smallest:", smallest);
