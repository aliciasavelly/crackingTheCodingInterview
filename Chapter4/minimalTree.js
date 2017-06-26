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
  if (arr.length < 3) {
    if (arr[0] <= root.value) {
      root.left = new BSTNode(arr[1]);
      root.left.left = new BSTNode(arr[0]);
    } else {
      root.right = new BSTNode(arr[0]);
      root.right.right = new BSTNode(arr[1]);
    }
  } else if (arr.length = 3) {
    if (arr[0] < root.value) {
      let newNode = new BSTNode(arr[1]);
      root.left = newNode;
      newNode.left = new BSTNode(arr[0]);
      newNode.right = new BSTNode(arr[2]);
    } else {
      let newNode = new BSTNode(arr[1]);
      root.right = newNode;
      newNode.left = new BSTNode(arr[0]);
      newNode.right = new BSTNode(arr[2]);
    }
  } else {
    let midIdx = Math.floor(arr.length);
    let newRoot = arr[midIdx];
    if (newRoot < root.value) {
      root.left = new BSTNode(newRoot);
      addToTree(arr.slice(0, midIdx), root.left);
      addToTree(arr.slice(midIdx + 1, arr.length), root.left);
    } else {
      root.right = new BSTNode(newRoot);
      addToTree(arr.slice(0, midIdx), root.right);
      addToTree(arr.slice(midIdx + 1, arr.length), root.right);
    }
  }
}

// let val = new BSTNode(1);
// let tree = new BST(val);
// tree.insert(3);
// tree.insert(7);
// tree.insert(8);
// tree.insert(2);
// tree.insert(1);
// tree.insert(4);
// tree.insert(15);
// tree.insert(17);
// tree.insert(20);
// tree.insert(23);
// tree.insert(11);
// tree.insert(16);

let tree = minimalTree([1, 2, 3, 4, 5, 6, 7]);
