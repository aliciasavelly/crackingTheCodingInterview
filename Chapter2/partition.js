const SinglyLinkedList = require('./singlyLinkedList.js');

/*

Partition: Write code to partition a linked list around a value x, such that all
nodes less than x come before all nodes great than or equal to x. If x is
contained within the list, the values of x only need to be after the elements
less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right
partitions.

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

*/

function partition(list, midPt) {
  let partition = 0;
  let current = list.head;
  let lower = list.head;
  let atPart = list.head.next;
  let prev = null;

  while (current) {
    if (current.value < midPt && current != lower) {
      lower.next = current;
      prev.next = current.next;
      current.next = atPart;
      lower = current;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
}

let linkedList = new SinglyLinkedList();
linkedList.append(3);
linkedList.append(5);
linkedList.append(8);
linkedList.append(5);
linkedList.append(10);
linkedList.append(2);
linkedList.append(1);

console.log(partition(linkedList, 5));
