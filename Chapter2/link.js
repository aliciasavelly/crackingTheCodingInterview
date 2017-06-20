class Link {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  remove() {
    if (this.prev != null) {
      console.log(this.prev.next);
      this.prev.next = this.next;
    }
    if (this.next != null) {
      this.next.prev = this.prev;
    }
    this.next = null;
    this.prev = null;
  }
}

let l = new Link(3);
console.log(l);
let l2 = new Link(2);
l.next = l2;
l.next.prev = l;
console.log(l);

module.exports = Link;
