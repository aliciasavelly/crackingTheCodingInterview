const BST = require('./BST.js');
const BSTNode = require('./BSTNode.js');

/*

Successor: Write an algorithm to find the "next" node. (i.e., in-order
successor) of a given node in a binary search tree. You may assume that each
node has a link to its parent.

*/

function successor(node) {
  let result = null;
  if (node.right && !node.right.left) {
    return node.right;
  }

  if (node.right) {
    let current = node.right.left;
    while (true) {
      if (!current.left) {
        return current;
      }
      current = current.left;
    }
  } else {
    let current = node.parent;
    if (current.value > node.value) {
      return current;
    }
    while (!(current.parent.value > current.value)) {
      current = current.parent;
    }
    return current.parent;
  }

  return result;
}

let val = new BSTNode(10);
let tree = new BST(val);
tree.insert(5);
tree.insert(8);
tree.insert(7);
tree.insert(6);
tree.insert(9);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.insert(0);
tree.insert(16);
tree.insert(13);
tree.insert(19);
tree.insert(20);
tree.insert(12);
tree.insert(11);
tree.insert(14);
tree.insert(15);
tree.insert(18);
tree.insert(17);

console.log(successor(tree.root.right).value == 17);
console.log(successor(tree.root.right.left).value == 14);
console.log(successor(tree.root.left.right.left).value == 8);
console.log(successor(tree.root.left.left.right.right).value == 5);
