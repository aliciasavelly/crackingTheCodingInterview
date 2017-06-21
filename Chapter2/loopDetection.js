const SinglyLinkedList = require('./singlyLinkedList.js');
const SingleLink = require('./singleLink.js');
/*

Loop Detection: Given a circular linked list, implement an algorithm that
returns the node at the beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer
points to an earlier node, so as to make a loop in the linked list.

EXAMPLE
Input: A -> B -> C -> D -> E -> C (the same C as earlier)
Output: C

*/

function loopDetection(list) {
  let current = list.head;
  // let count = 0;

  while (!current.visited) {
    current.visited = true;
    current = current.next;
  }

  return current;
}

let ll1 = new SinglyLinkedList();
// let ll2 = new SinglyLinkedList();
// let ll3 = new SinglyLinkedList();

let l1 = new SingleLink("C");
let l2 = new SingleLink(2);
let l3 = new SingleLink(3);
let l4 = new SingleLink(4);
let l5 = new SingleLink(5);
let l6 = new SingleLink(6);
let l7 = new SingleLink(7);

ll1.append("A");
ll1.append("B");
ll1.head.next.next = l1;
ll1.length++;
ll1.append("D");
ll1.append("E");
l1.next.next.next = l1;
ll1.length++;

console.log(loopDetection(ll1));
