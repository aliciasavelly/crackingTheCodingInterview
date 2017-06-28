const BST = require('./BST.js');
const BSTNode = require('./BSTNode.js');

/*

Check Balanced: Implement a function to check if a binary tree is balanced. For
the purposes of this question, a balanced tree is defined to be a tre such that
the heights fo the two subtrees of any node never differ by more than one.

*/

function checkBalanced(root) {
  console.log(root.value);
  if (typeof root === "undefined" || root === null) {
    return undefined;
  }

  return maxDepth(root) - minDepth(root) <= 1;
}

function minDepth(node) {
  if (typeof node === "undefined" || node === null) {
    return 0;
  }

  return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}

function maxDepth(node) {
  if (typeof node === "undefined" || node === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

let val = new BSTNode(10);
let tree = new BST(val);
tree.insert(9);
tree.insert(8);
tree.insert(7);
tree.insert(6);
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(15);
tree.insert(17);
tree.insert(20);
tree.insert(23);
tree.insert(11);
tree.insert(16);

let val1 = new BSTNode(1);
let b1 = new BST(val1);
b1.insert(2);
b1.insert(3);
b1.insert(4);

let val2 = new BSTNode(4);
let b2 = new BST(val2);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);

console.log(checkBalanced(tree.root));
console.log(checkBalanced(b1.root));
console.log(checkBalanced(b2.root));

// function checkBalanced(root) {
//   if (root == null) {
//     return true;
//   }
//
//   let heightDiff = getHeight(root.left) - getHeight(root.right);
//
//   if (Math.abs(heightDiff) > 1) {
//     return false;
//   } else {
//     return checkBalanced(root.left) && checkBalanced(root.right);
//   }
// }
//
// function getHeight(root) {
//   if (root == null) {
//     return -1;
//   }
//
//   return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
// }

// function checkHeight(root) {
//   // console.log(root == null);
//   if (root == null) {
//     return -1;
//   } else {
//     // console.log(root.left);
//   }
//
//   let leftHeight = checkHeight(root.left);
//   // console.log(leftHeight);
//   // console.log(rightHeight);
//
//   if (leftHeight == -Infinity) {
//     return -Infinity;
//   }
//   let rightHeight = checkHeight(root.right);
//   if (rightHeight == -Infinity) {
//     return -Infinity;
//   }
//
//   let heightDiff = leftHeight - rightHeight;
//   console.log(leftHeight);
//   console.log(rightHeight);
//   console.log(heightDiff);
//   console.log("-----");
//   if (Math.abs(heightDiff) > 1 || heightDiff == NaN) {
//     return -Infinity;
//   } else {
//     // console.log(leftHeight);
//     // console.log(rightHeight);
//     return Math.max(leftHeight, rightHeight);
//   }
// }
//
// function checkBalanced(root) {
//   let result = checkHeight(root);
//   // console.log(result);
//   return result != -Infinity;
// }
