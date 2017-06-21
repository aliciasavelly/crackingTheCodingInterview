class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  pop() {
    this.length--;
    return this.stack.pop();
  }

  push(value) {
    this.stack.push(value);
    this.length++;
    return value;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Stack;
