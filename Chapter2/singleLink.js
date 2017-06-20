class SingleLink {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  // remove() {
  //   this.next = null;
  // }
}

// let l = new SingleLink(3);
// let l2 = new SingleLink(2);
// l.next = l2;
// l.next.prev = l;

module.exports = SingleLink;
