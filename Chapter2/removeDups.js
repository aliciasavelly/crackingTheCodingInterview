const LinkedList = require('./linkedList.js');

/*

Remove Dups: Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?

*/

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(1);
ll.append(4);
ll.append(3);
ll.append(1);
ll.append(9);
// 1, 2, 3, 4, 9

function removeDups(linkedList) {
  let valHash = {};
  let current = linkedList.head.next;

  while (current.next) {
    if (valHash[current.value]) {
      current = current.next;
      current.prev.remove();
    } else {
      valHash[current.value] = true;
      current = current.next;
    }
  }

  return linkedList;
}

console.log(ll.head.next.value);
console.log(ll.head.next.next.value);
console.log(ll.head.next.next.next.value);
console.log(ll.head.next.next.next.next.value);
console.log(ll.head.next.next.next.next.next.value);
console.log(ll.head.next.next.next.next.next.next.value);
console.log(ll.head.next.next.next.next.next.next.next.value);
console.log(ll.head.next.next.next.next.next.next.next.next.value);
removeDups(ll);
console.log("XXXXXXXXXX");
console.log(ll.head.next.value);
console.log(ll.head.next.next.value);
console.log(ll.head.next.next.next.value);
console.log(ll.head.next.next.next.next.value);
console.log(ll.head.next.next.next.next.next.value);
