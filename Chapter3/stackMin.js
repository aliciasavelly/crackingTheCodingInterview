class StackMin {
  constructor() {
    this.stack = [];
    this.length = 0;
    this.min = 0;
  }

  pop() {
    this.length--;
    return this.stack.pop();
  }

  push(value) {
    this.stack.push(value);
    this.length++;
    if (value < this.min) {
      this.min = value;
    }
    return value;
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}
