const BSTNode = require('BSTNode.js');

class BST {
  constructor(value) {
    this.root = new BSTNode(value);
  }

  find(el, root = this.root) {
    if (el == root.value) {
      return root;
    }

    if (el <= root.value) {
      if (root.left_child) {
        find(el, root.left_child);
      } else {
        return false;
      }
    } else if (el > root.value) {
      if (root.right_child) {
        find(el, root.right_child);
      } else {
        return false;
      }
    }
  }

  insert(value, root = this.root) {
    let node = new BSTNode(value);

    if (!root.value) {
      root.value = node.value;
    } else if (value <= root.value) {
      if (root.left_child) {
        let left_tree = new BST(root.left_child);
        left_tree.insert(value);
      } else {
        root.left_child = node;
      }
    } else if (value > root.value) {
      if (root.right_child) {
        let right_tree = new BST(root.right_child);
        right_tree.insert(value);
      } else {
        root.right_child = node;
      }
    }
  }
}

let tree = new BST(10);
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

module.exports = BST;
