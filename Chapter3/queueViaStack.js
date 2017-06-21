const Queue = require('./queue.js');
const Stack = require('./stack.js')

class StackQueue {
  constructor() {
    this.queue1 = new Stack();
    this.queue2 = new Stack();
    this.last = ;
  }

  enqueue(value) {
    if (this.last != 1) {
      reverseQueues();
    }

    this.queue1.push(value);
    this.last = 1;

    return value
  }

  dequeue() {
    if (this.last != 2) {
      reverseQueues();
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
    if (queue1.length === 0) {
      while (queue2.length > 0) {
        queue1.push(queue2.pop());
      }
    } else {
      while (queue1.length > 0) {
        queue2.push(queue1.pop());
      }
    }
  }
}
