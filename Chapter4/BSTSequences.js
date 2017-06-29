const BST = require('./BST.js');
const BSTNode = require('./BSTNode.js');

/*

BST Sequences: A binary search tree was created by traversing through an array
from left to right and inserting each element. Given a binary search tree with
distinct elements, print all possible arrays that could have led to this tree.

EXAMPLE

Input:
1 <-- 2 --> 3

Output:
[[2, 1, 3], [2, 3, 1]]

*/

function BSTSequences(tree) {
  let sequences = [];
  var recurse = function(nodes, travelled) {
    let noChild = true;

    nodes.forEach((node) => {
      // console.log(node.left !== null);
      if (node.left !== null && node.left !== undefined && travelled[node.left.value] === undefined) {
        noChild = false;
        travelled[node.left.value] = true;
        recurse(nodes.concat([node.left]), travelled);
        delete travelled[node.left.value];
      }
      if (node.right !== undefined && node.right !== null && travelled[node.right.value] === undefined) {
        noChild = false;
        travelled[node.right.value] = true;
        recurse(nodes.concat([node.right]), travelled);
        delete travelled[node.right.value];
      }
    });
    if (noChild) {
      // console.log(nodes.map(node => node.value));
      console.log(nodes);
      sequences.push(nodes.map(node => node.value));
    }
  }
  let startTravelled = {};
  startTravelled[tree.root.value] = true;
  console.log(startTravelled);
  recurse([tree], startTravelled);
  return sequences;
}

let b = new BST(new BSTNode(4));
b.insert(2);
b.insert(6);
b.insert(1);
b.insert(3);
b.insert(5);
b.insert(7);

console.log(BSTSequences(b));
