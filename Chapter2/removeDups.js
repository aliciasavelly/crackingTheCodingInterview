const LinkedList = require('./linkedList.js');

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
      let toRemove = current;
      current = current.next;
      console.log(toRemove);
      toRemove.remove();
    } else {
      valHash[current.value] = true;
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
ll.head.next.remove();
console.log(ll.head.next.value);
console.log(ll.head.next.next.value);
console.log(ll.head.next.next.next.value);
console.log(ll.head.next.next.next.next.value);
console.log(ll.head.next.next.next.next.next.value);
