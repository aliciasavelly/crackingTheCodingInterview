const BSTNode = require('./BSTNode.js');

/*

First Common Ancestor: Design an algorithm and write code to find the first
common ancestor of two nodes in a binary tree. Avoid storing additional nodes
in a data structure. This is not necessarily a binary search tree.

*/

class BinaryTree {
  constructor(node) {
    this.root = node;
  }
}

let root = new BSTNode(7);
let tree = new BinaryTree(root);
tree.root.left = new BSTNode(8);
tree.root.left.parent = tree.root;
tree.root.left.left = new BSTNode(3);
tree.root.left.left.parent = tree.root.left;
tree.root.left.right = new BSTNode(2);
tree.root.left.right.parent = tree.root.left;
tree.root.left.left.left = new BSTNode(10);
tree.root.left.left.left.parent = tree.root.left.left;
tree.root.right = new BSTNode(1);
tree.root.right.parent = tree.root;
tree.root.right.left = new BSTNode(4);
tree.root.right.left.parent = tree.root.right;
tree.root.right.right = new BSTNode(9);
tree.root.right.right.parent = tree.root.right;

function firstCommonAncestor(node1, node2) {
  let current = node1.parent;
  let result = null;

  while (current) {
    current.seen = true;
    current = current.parent;
  }

  current = node2.parent;
  while (current) {
    if (current.seen) {
      return current.value;
    }
    current = current.parent;
  }

  return null;
}

// console.log(firstCommonAncestor(tree.root.left.left.left, tree.root.left.right));
// console.log(firstCommonAncestor(tree.root.left.left, tree.root.left));
console.log(firstCommonAncestor(tree.root.left.right, tree.root.right.left));
// console.log(firstCommonAncestor(tree.root, tree.root.right.right));
