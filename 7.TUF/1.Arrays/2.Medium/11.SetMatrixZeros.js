function setZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let fcol = false;
  let frow = false;

  // Check if there is a zero in the first column, set
  // fcol to true.
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      fcol = true;
      break;
    }
  }

  // Check if there is a zero in the first row, set frow
  // to true.
  for (let i = 0; i < cols; i++) {
    if (matrix[0][i] === 0) {
      frow = true;
      break;
    }
  }

  // Check row elements (by ignoring the first row and
  // first column). If zero is found, set the
  // corresponding row's and column's first element to
  // zero.
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = matrix[i][0] = 0;
      }
    }
  }

  // Check every row's first element starting from the
  // second row. Set the complete row to zero if zero is
  // found.
  for (let i = 1; i < rows; i++) {
    if (matrix[i][0] === 0) {
      matrix[i].fill(0);
    }
  }

  // Check every column's first element starting from
  // the second column. Set the complete column to zero
  // if zero is found.
  for (let j = 1; j < cols; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < rows; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  // If fcol is true, set the first column to zero.
  if (fcol) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  // If frow is true, set the first row to zero.
  if (frow) {
    matrix[0].fill(0);
  }

  return matrix;
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]; //[[1,0,1],[0,0,0],[1,0,1]]
// const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

console.log(setZeroes(matrix));

// Time Complexity = O(m * n)
// Space Complexity = O(1)

/*---------------------------------------------------Approach:---------------------------------------------------------------
• Initial Check on First Row and Column:
    ○ First, check if there are any zeros in the first row or first column and store this information in two boolean flags (frow and fcol).
• Mark Rows and Columns for Zeroing:
    ○ Traverse the matrix starting from the second row and second column.
    ○ If any element is 0, mark the first element of that row and column as 0. This acts as a marker for setting the entire row or column to zero later.
• Set Rows and Columns to Zero:
    ○ For rows (ignoring the first row), if the first element of a row is 0, set the entire row to zero.
    ○ For columns (ignoring the first column), if the first element of a column is 0, set the entire column to zero.
• Handle First Row and Column:
    ○ If fcol is true, set the first column to zero.
    ○ If frow is true, set the first row to zero.
----------------------------------------------------------------------------------------------------------------------------*/
