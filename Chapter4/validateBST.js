const BST = require('./BST.js');
const BSTNode = require('./BSTNode.js');

/*

Validate BST: Implement a function to check if a binary tree is a binary
search tree.

*/

function validateBST(treeRoot) {
  let root = treeRoot;
  console.log(root.left);
  console.log(root.right);
  // console.log(root);
  if (root.left != null && root.left.value > root.value) {
    console.log(15);
    return false;
  }
  if (root.right != null && root.right.value < root.value) {
    console.log(19);
    return false;
  }
  if (root.left && !validateBST(root.left)) {
    console.log(22);
    return false;
  }
  if (root.right && !validateBST(root.right)) {
    console.log(26);
    return false;
  }
  console.log(29);
  return true;
}

let val = new BSTNode(10);
let tree = new BST(val);
tree.insert(3);
tree.insert(7);
tree.insert(8);
tree.insert(2);
tree.insert(1);
tree.insert(4);
tree.insert(15);
tree.insert(17);
tree.insert(20);
tree.insert(23);
tree.insert(11);
tree.insert(16);
tree.root.left.left.value = 234;

console.log(tree);
console.log(validateBST(tree.root));
