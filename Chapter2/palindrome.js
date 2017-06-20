const SinglyLinkedList = require('./singlyLinkedList.js');

/*

Palindrome: Implement a function to check if a linked list is a palindrome.

*/

function palindrome(list) {
  let arr = [];
  let current = list.head;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return isArrPalindrome(arr);
}

function isArrPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

let list1 = new SinglyLinkedList();
list1.append(1);
list1.append(2);
list1.append(1);

let list2 = new SinglyLinkedList();
list2.append("a");
list2.append("b");
list2.append("c");
list2.append("c");
list2.append("b");
list2.append("a");

let list3 = new SinglyLinkedList();
list3.append(1);
list3.append(2);
list3.append(3);

let list4 = new SinglyLinkedList();
list4.append("a");
list4.append("b");
list4.append("c");
list4.append("d");
list4.append("c");
list4.append("b");
list4.append("a");

let list5 = new SinglyLinkedList();
list5.append(1);
list5.append(2);
list5.append(1);
list5.append(1);

let list6 = new SinglyLinkedList();
list6.append(3);
list6.append(2);
list6.append(2);
list6.append(1);
list6.append(1);

console.log(palindrome(list1) == true);
console.log(palindrome(list2) == true);
console.log(palindrome(list3) == false);
console.log(palindrome(list4) == true);
console.log(palindrome(list5) == false);
console.log(palindrome(list6) == false);
