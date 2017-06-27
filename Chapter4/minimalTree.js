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

    if (newRoot < root.value) {
      root.left = newRoot;
      let resultRoot = root.left;
    } else {
      root.right = newRoot;
      let resultRoot = root.right;
    }

    addToTree(arr.slice(0, midIdx), resultRoot);
    addToTree(arr.slice(midIdx + 1, arr.length), resultRoot);
  }
}

let tree = minimalTree([1, 2, 3, 4, 5, 6, 7]);
let tree2 = minimalTree([1, 2, 3, 4, 5, 6, 7, 8]);
