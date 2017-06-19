class Link {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  remove() {
    if (this.prev != null) {
      this.prev.next = this.next;
    }
    if (this.next != null) {
      this.next.prev = this.prev;
    }
  }
}

module.exports = Link;
