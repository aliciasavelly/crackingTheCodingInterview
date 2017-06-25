const BSTNode = require('./BSTNode.js');

class BST {
  constructor(value) {
    this.root = value;
  }

  find(el, root = this.root) {
    if (el == root.value) {
      return root;
    }

    if (el <= root.value) {
      if (root.left) {
        this.find(el, root.left);
      } else {
        return false;
      }
    } else if (el > root.value) {
      if (root.right) {
        this.find(el, root.right);
      } else {
        return false;
      }
    }
  }

  insert(value, root = this.root) {
    let node = new BSTNode(value);

    if (!root.value) {
      console.log("32");
      root.value = node.value;
    } else if (value <= root.value) {
      console.log("35");
      if (root.left) {
        console.log("37");
        let left_tree = new BST(root.left);
        left_tree.insert(value);
        console.log(left_tree);
      } else {
        console.log("41");
        root.left = node;
      }
    } else if (value > root.value) {
      console.log("45");
      if (root.right) {
        console.log("47");
        let right_tree = new BST(root.right);
        right_tree.insert(value);
      } else {
        console.log("51");
        root.right = node;
      }
    }
  }
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

module.exports = BST;
