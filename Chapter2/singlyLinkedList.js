const SingleLink = require('./singleLink.js');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  first() {
    return this.head.value;
  }

  empty() {
    return this.length == 0;
  }

  append(value) {
    let link = new SingleLink(value);
    let currentLink = this.head;

    if (!currentLink) {
      this.head = link;
      this.length += 1;

      return link;
    }

    while (currentLink.next) {
      currentLink = currentLink.next;
    }

    currentLink.next = link;
    this.length += 1;

    return link;
  }

  searchForLinkAt(position) {
    let currentLink = this.head;
    let length = this.length;
    let count = 1;

    if (length === 0 || position < 1 || position > length) {
      throw Error;
    }

    while (count < position) {
      currentLink = currentLink.next;
      count++;
    }

    return currentLink;
  }
}

let ll = new SinglyLinkedList();
ll.append(1);
ll.append(2);
ll.append(3);

module.exports = SinglyLinkedList;
