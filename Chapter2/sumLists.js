const SinglyLinkedList = require('./singlyLinkedList.js');

/*

Sum Lists: You have two numbers represented by a linked list, where each node
contains a single digit. The digits are stored in reverse order, such that the
1's digit is at the head of the list. Write a function that adds the two
numbers and returns the sum as a linked list.

For an extra challenge, solve this assuming that the digits are no longer
stored in reverse order.
*/

function sumLists(list1, list2) {
  let num1 = "";
  let num2 = "";
  let current = list1.head;

  while (current) {
    num1 = String(current.value) + num1;
    current = current.next;
  }

  current = list2.head;
  while (current) {
    num2 = String(current.value) + num2;
    current = current.next;
  }

  num1 = Number(num1);
  num2 = Number(num2);
  let result = String(num1 + num2);

  let resultList = new SinglyLinkedList();
  for (let i = result.length - 1; i >= 0; i--) {
    resultList.append(result[i]);
  }

  return resultList;
}

let list1 = new SinglyLinkedList();
list1.append(7);
list1.append(1);
list1.append(6);
let list2 = new SinglyLinkedList();
list2.append(5);
list2.append(9);
list2.append(2);

let res = sumLists(list1, list2);
