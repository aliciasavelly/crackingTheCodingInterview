const Link = require('./link.js');

class LinkedList {
  constructor() {
    this.head = new Link();
    this.tail = new Link();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  first() {
    return this.head.next;
  }

  last() {
    return this.tail.prev;
  }

  empty() {
    return this.head.next == this.tail;
  }

  append(value) {
    let link = new Link(value);
    link.prev = this.tail.prev;
    link.next = this.tail;
    this.tail.prev.next = link;
    this.tail.prev = link;
    return link;
  }

  removeLink(link) {
    link.remove();
  }
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);

module.exports = LinkedList;
