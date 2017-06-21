const Stack = require('./stack.js');

class PlatesStack {
  constructor() {
    this.stack = [new Stack()];
    this.lastPos = 0;
    this.cap = 10;
  }

  pop() {
    let result = this.stack[this.lastPos].pop();
    if (this.stack[this.lastPos].length == 0) {
      this.stack.pop();
      this.lastPos--;
    }

    return result;
  }

  push(value) {
    if (this.stack[this.lastPos].length == this.cap) {
      this.stack.push(new Stack());
      this.lastPos++;
    }

    this.stack[this.lastPos].push(value);

    return value;
  }

  peek() {
    return this.stack[this.lastPos].peek();
  }

  isEmpty() {
    return this.lastPos == 0 && this.stack[this.lastPos].isEmpty();
  }
}
