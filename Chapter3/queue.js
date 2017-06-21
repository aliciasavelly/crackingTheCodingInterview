class Queue {
  constructor() {
    this.queue = [];
  }

  add(item) {
    this.queue.push(item);
    return item;
  }

  remove() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = Queue;
