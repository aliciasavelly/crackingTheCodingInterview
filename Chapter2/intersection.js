const SinglyLinkedList = require('./singlyLinkedList.js');
const SingleLink = require('./singleLink.js');

/*

Intersection: Given two (singly) linked lists, determine if the two lists
intersect. Return the intersecting node. Note that the intersection is defined
based on reference, not value. That is, if the kth node of the first linked
list is the exact same node (by reference) as the jth node of the second list,
then they are intersecting.

*/

function intersection(list1, list2) {
  if (list1.head == list2.head) {
    return true;
  }

  let current = list1.head;

  while (current) {
    let temp = current.next;
    current.next = 0;
    current = temp;
  }

  current = list2.head;

  while (current) {
    if (current.next == 0) {
      return true;
    }

    current = current.next;
  }

  return false;
}

let ll1 = new SinglyLinkedList();
let ll2 = new SinglyLinkedList();
let ll3 = new SinglyLinkedList();

let l1 = new SingleLink(1);
let l2 = new SingleLink(2);
let l3 = new SingleLink(3);
let l4 = new SingleLink(4);
let l5 = new SingleLink(5);
let l6 = new SingleLink(6);
let l7 = new SingleLink(7);

ll1.append(0);
ll1.head.next = l1;
l1.next = l2;
l2.next = l3;
// 0, l1, l2, l3

// ll2.append(0);
// ll2.head.next = l4;
// l4.next = l5;
// l5.next = l2;
// 0, l4, l5, l2

ll3.append(0);
ll3.head.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;
