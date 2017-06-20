const SinglyLinkedList = require('./singlyLinkedList.js');

/*

Delete Middle Node: Implement an algorithm to delete a node in the middle
(i.e., any node but the first and last node, not necessarily the exact middle)
of a singly linked list, given only access to that node.

EXAMPLE
Input: the node c from the linked list a -> b -> c -> d -> e -> f
Result: nothing is returned, but the new linked list looks like
a -> b -> c -> d -> e -> f

*/

function deleteMiddleNode(list, value) {
  let prev = list.head;

  while (prev.next.next) {
    if (prev.next.value == value) {
      prev.next = prev.next.next;
      return;
    } else {
      prev = prev.next;
    }
  }
}

let singleLL = new SinglyLinkedList();
singleLL.append(1);
singleLL.append(2);
singleLL.append(3);
singleLL.append(4);
singleLL.append(5);
singleLL.append(6);
singleLL.append(7);

// deleteMiddleNode(singleLL, 3);
deleteMiddleNode(singleLL, 6);
// deleteMiddleNode(singleLL, 2);
