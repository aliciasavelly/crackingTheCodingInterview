const BST = require('./BST.js');
const BSTNode = require('./BSTNode.js');

/*

Check Balanced: Implement a function to check if a binary tree is balanced. For
the purposes of this question, a balanced tree is defined to be a tre such that
the heights fo the two subtrees of any node never differ by more than one.

*/

function checkBalanced(root) {
  if (root == null) {
    return true;
  }

  let heightDiff = getHeight(root.left) - getHeight(root.right);

  if (Math.abs(heightDiff) > 1) {
    return false;
  } else {
    return checkBalanced(root.left) & checkBalanced(root.right);
  }

  return true;
}

function getHeight(root) {
  if (root == null) {
    return -1;
  }

  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

let val = new BSTNode(10);
let tree = new BST(val);
tree.insert(9);
tree.insert(8);
tree.insert(7);
// tree.insert(6);
// tree.insert(5);
// tree.insert(4);
tree.insert(15);
tree.insert(17);
tree.insert(20);
tree.insert(23);
tree.insert(11);
tree.insert(16);

console.log(checkBalanced(tree.root));
