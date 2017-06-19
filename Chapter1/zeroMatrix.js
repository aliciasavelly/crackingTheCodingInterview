/*

Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
its entire row and column are set to 0.

*/

function zeroMatrix(matrix) {
  let result = [];
  let zeroRow = [];
  let cols = [];

  for (let i = 0; i < matrix[0].length; i++) {
    zeroRow.push(0);
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[j][k] == 0) {
        if (!result[j]) {
          result[j] = zeroRow;
        }
        if (!cols.includes(k)) {
          cols.push(k);
        }
      }
      if (k + 1 == matrix[0].length && !result[j]) {
        result[j] = matrix[j];
      }
    }
  }

  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < cols.length; n++) {
      result[m][cols[n]] = 0;
    }
  }
  return result;
}

console.log(zeroMatrix([[0, 1, 2, 0],
                        [2, 3, 4, 2],
                        [0, 3, 2, 1]]));
