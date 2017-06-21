const Queue = require('./queue.js');
const Stack = require('./stack.js')

class StackQueue {
  constructor() {
    this.queue1 = new Stack();
    this.queue2 = new Stack();
    this.last = 1;
  }

  enqueue(value) {
    if (this.last != 1) {
      this.reverseQueues();
    }

    this.queue1.push(value);
    this.last = 1;

    return value;
  }

  dequeue() {
    if (this.last != 2) {
      this.reverseQueues();
    }

    this.last = 2;
    return this.queue2.pop();
  }

  peek() {
    if (this.queue1.stack[0]) {
      return this.queue1.stack[0];
    } else {
      return this.queue2.peek();
    }
  }

  isEmpty() {
    return this.queue1.length + this.queue2.length === 0;
  }

  reverseQueues() {
    if (this.queue1.length === 0) {
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.pop());
      }
    } else {
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.pop());
      }
    }
  }
}
