function rotateImage(matrix) {
  const n = matrix.length;

  for (let row = 0; row < n / 2; row++) {
    for (let col = row; col < n - row - 1; col++) {
      [matrix[row][col], matrix[col][n - 1 - row]] = [
        matrix[col][n - 1 - row],
        matrix[row][col],
      ];

      [matrix[row][col], matrix[n - 1 - row][n - 1 - col]] = [
        matrix[n - 1 - row][n - 1 - col],
        matrix[row][col],
      ];

      [matrix[row][col], matrix[n - 1 - col][row]] = [
        matrix[n - 1 - col][row],
        matrix[row][col],
      ];
    }
  }
  return matrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //[[7,4,1],[8,5,2],[9,6,3]]
// const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] //[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

console.log(rotateImage(matrix));

// Time Complexity = O(n^2)
// Space Complexity = O(1)

/*----------------------------------------Approach to Rotate a Matrix:-------------------------------------------------------
• Layer-wise Rotation: The matrix is rotated layer by layer, starting from the outermost layer and moving inward.
• Swapping Elements: For each element in a layer, four corresponding elements are swapped in a clockwise direction.
• Coordinates:
   ○ For each element in the top row, its corresponding element from the right column, bottom row, and left column is swapped.
   ○ Termination: The loop runs only for half of the matrix layers (n / 2), ensuring all elements are rotated.
• Key Operations:
   ○ Swap elements in groups of four in a clockwise fashion to achieve rotation.

• Time Complexity: O(n^2) where n is the number of rows/columns. Space Complexity: O(1) (in-place rotation).
---------------------------------------------------------------------------------------------------------------------------*/
