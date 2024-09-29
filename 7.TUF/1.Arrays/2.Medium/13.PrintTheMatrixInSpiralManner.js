function spiralOrder(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let rs = 0,
    re = n - 1,
    cs = 0,
    ce = m - 1;
  let ans = [];

  while (rs <= re && cs <= ce) {
    // Traverse from left to right
    for (let col = cs; col <= ce; col++) {
      ans.push(matrix[rs][col]);
    }
    rs++;

    // Traverse from top to bottom
    for (let row = rs; row <= re; row++) {
      ans.push(matrix[row][ce]);
    }
    ce--;

    // Traverse from right to left (if remaining)
    if (rs <= re) {
      for (let col = ce; col >= cs; col--) {
        ans.push(matrix[re][col]);
      }
      re--;
    }

    // Traverse from bottom to top (if remaining)
    if (cs <= ce) {
      for (let row = re; row >= rs; row--) {
        ans.push(matrix[row][cs]);
      }
      cs++;
    }
  }

  return ans;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //[1,2,3,6,9,8,7,4,5]
// const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] //[1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder(matrix));

// Time Complexity = O(n * m)
// Space Complexity = O(n * m)

/*---------------------------------------------Spiral Order Traversal Logic:------------------------------------------------
• Boundaries Setup: Use four boundaries (rs, re, cs, ce) for rows and columns.
• Traversal:
    ○ Traverse from left to right along the top row (rs), then increment rs.
    ○ Traverse from top to bottom along the right column (ce), then decrement ce.
    ○ Traverse from right to left along the bottom row (re), then decrement re.
    ○ Traverse from bottom to top along the left column (cs), then increment cs.
• Stop Condition: Continue this until the boundaries cross (rs > re or cs > ce).
• Store the Result: Push the elements to the result array (ans) during each traversal.

• Time Complexity:
    ○ O(m * n): Where m is the number of rows and n is the number of columns in the matrix.
    ○ Every element in the matrix is visited once during the traversal, so the time complexity is proportional to the total number of elements (m * n).

• Space Complexity:
   ○ O(m * n): The space complexity is primarily due to the result array ans, which stores all the elements of the matrix.
   ○ Apart from this, only a few extra variables (rs, re, cs, ce) are used, which take constant space. Thus, the overall space complexity is dominated by the size of the result array.
----------------------------------------------------------------------------------------------------------------------------*/
