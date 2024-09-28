function pairWithMaxSum(arr) {
  let maxi = -Infinity;
  let sum;
  for (let i = 0; i < arr.length - 1; i++) {
    sum = 0;
    sum = arr[i] + arr[i + 1];
    maxi = Math.max(sum, maxi);
  }
  return maxi;
}

const arr = [4, 3, 1, 5, 6]; //11
/*
Explanation : Subarrays with smallest and second smallest are:- [4, 3] smallest = 3,second smallest = 4
[4, 3, 1] smallest = 1, second smallest = 3
[4, 3, 1, 5] smallest = 1, second smallest = 3
[4, 3, 1, 5, 6] smallest = 1, second smallest = 3
[3, 1] smallest = 1, second smallest = 3
[3, 1, 5] smallest = 1, second smallest = 3
[3, 1, 5, 6] smallest = 1, second smallest = 3
[1, 5] smallest = 1, second smallest = 5
[1, 5, 6] smallest = 1, second smallest = 5
[5, 6] smallest = 5, second smallest = 6
Maximum sum among all above choices is, 5 + 6 = 11.
*/

// const arr = [5, 4, 3, 1, 6]; //9
console.log(pairWithMaxSum(arr));

// Time Complexity = O(n)
// Space Complexity = O(1)
