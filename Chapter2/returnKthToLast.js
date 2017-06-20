const SinglyLinkedList = require('./singlyLinkedList.js');

/*

Return Kth to Last: Implement an algorithm to find the kth to last element of a
singly linked list.

*/

function returnKthToLast(list, k) {
  return list.searchForLinkAt(list.length - k + 1);
}

let singleLL = new SinglyLinkedList();
singleLL.append(1);
singleLL.append(2);
singleLL.append(3);
singleLL.append(4);
singleLL.append(5);
singleLL.append(6);
singleLL.append(7);

console.log(returnKthToLast(singleLL, 1));
console.log(returnKthToLast(singleLL, 2));
console.log(returnKthToLast(singleLL, 3));
console.log(returnKthToLast(singleLL, 4));
console.log(returnKthToLast(singleLL, 5));
