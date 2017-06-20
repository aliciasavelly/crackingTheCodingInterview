const SinglyLinkedList = require('./singlyLinkedList.js');

/*

Sum Lists: You have two numbers represented by a linked list, where each node
contains a single digit. The digits are stored in reverse order, such that the
1's digit is at the head of the list. Write a function that adds the two
numbers and returns the sum as a linked list.

For an extra challenge, solve this assuming that the digits are no longer
stored in reverse order.

*/

function reverseListString(list) {
  let result = "";
  let current = list.head;

  while (current) {
    result = String(current.value) + result;
    current = current.next;
  }

  return result;
}

function sumLists(list1, list2) {
  let num1 = reverseListString(list1);
  let num2 = reverseListString(list2);
  let result = String(Number(num1) + Number(num2));

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
