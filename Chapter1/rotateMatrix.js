/*

Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in
the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you
do this in place?

*/

function rotateMatrix(matrix) {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[0].length; k++) {
      result[k].unshift(matrix[j][k]);
    }
  }

  return result;
}

console.log(rotateMatrix([["A", "B", "C", "D"],
                          ["E", "F", "G", "H"],
                          ["I", "J", "K", "L"],
                          ["M", "N", "O", "P"]]));

console.log(rotateMatrix([["A", "B"],
                          ["C", "D"]]));

console.log(rotateMatrix([["A", "B"],
                          ["C", "D"],
                          ["E", "F"]]));
