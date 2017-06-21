class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    return this.stack.pop();
  }

  push(value) {
    this.stack.push(value);
    return value;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
