// 1.
// function FlaternArray(array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       result = result.concat(FlaternArray(array[i]));
//     } else {
//       result.push(array[i]);
//     }
//   }

//   return result;
// }

// 2.
//  Using reduce Method
function FlaternArray(array) {
  return array.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? FlaternArray(item) : item);
  }, []);
}

// 3.
// Using ES6 flat() Method
// let result = array.flat(Infinity);

// 4.
// Using Iterative Approach with Stack
// For a non-recursive solution using a stack:

// function FlaternArray(array) {
//   let result = [];
//   let stack = [...array];

//   while (stack.length) {
//     let next = stack.pop();
//     if (Array.isArray(next)) {
//       stack.push(...next);
//     } else {
//       result.push(next);
//     }
//   }

//   return result.reverse();
// }

let array = [1, [2, [8, [3, [4, 5]], [6, 7]]]];

console.log("Result: ", FlaternArray(array));
