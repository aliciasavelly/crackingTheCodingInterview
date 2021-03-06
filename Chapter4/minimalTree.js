const BSTNode = require('./BSTNode.js');
const BST = require('./BST.js');

/*

Minimal Tree: Given a sorted (increasing order) array with unique integer
elements, write an algorithm to create a binary search tree with minimal height.

*/

function minimalTree(array) {
  let midIdx = Math.floor(array.length / 2);
  let root = new BSTNode(array[midIdx]);
  let tree = new BST(root);
  addToTree(array.slice(0, midIdx), tree.root);
  addToTree(array.slice(midIdx + 1, array.length), tree.root);
  return tree;
}

function addToTree(arr, root) {
  if (arr.length == 2) {
    if (arr[0] <= root.value) {
      root.left = new BSTNode(arr[1]);
      root.left.left = new BSTNode(arr[0]);
    } else {
      root.right = new BSTNode(arr[0]);
      root.right.right = new BSTNode(arr[1]);
    }
  } else if (arr.length == 1 || arr.length == 3) {
    let newNode = (arr.length == 1 ? new BSTNode(arr[0]) : new BSTNode(arr[1]));

    if (arr[0] <= root.value) {
      root.left = newNode;
    } else {
      root.right = newNode;
    }

    if (arr.length == 3) {
      newNode.left = new BSTNode(arr[0]);
      newNode.right = new BSTNode(arr[2]);
    }
  } else {
    let midIdx = Math.floor(arr.length / 2);
    let newRoot = new BSTNode(arr[midIdx]);
    let resultRoot = newRoot;

    if (newRoot.value <= root.value) {
      root.left = newRoot;
    } else {
      root.right = newRoot;
    }

    addToTree(arr.slice(0, midIdx), resultRoot);
    addToTree(arr.slice(midIdx + 1, arr.length), resultRoot);
  }
}

let tree = minimalTree([1, 2, 3, 4, 5, 6, 7]);
let tree2 = minimalTree([1, 2, 3, 4, 5, 6, 7, 8]);
let tree3 = minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// console.log(tree3.root.value == 8);
// console.log(tree3.root.left.value == 4);
// console.log(tree3.root.left.left.value == 2);
// console.log(tree3.root.left.right.value == 6);
// console.log(tree3.root.left.right.left.value == 5);
// console.log(tree3.root.left.right.right.value == 7);
// console.log(tree3.root.left.left.right.value == 3);
// console.log(tree3.root.left.left.left.value == 1);
// console.log(tree3.root.right.value == 12);
// console.log(tree3.root.right.left.value == 10);
// console.log(tree3.root.right.right.value == 14);
// console.log(tree3.root.right.right.left.value == 13);
// console.log(tree3.root.right.right.right.value == 15);
// console.log(tree3.root.right.left.left.value == 9);
// console.log(tree3.root.right.left.right.value == 11);
