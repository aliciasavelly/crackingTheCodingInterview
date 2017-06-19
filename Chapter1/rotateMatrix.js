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

  return result;
}

console.log(rotateMatrix([["A", "B", "C", "D"],
                          ["E", "F", "G", "H"],
                          ["I", "J", "K", "L"],
                          ["M", "N", "O", "P"]]));
