/*

Stack Min: How would you design a stack which, in addition to push and pop, has
a function min which returns the minimum element? Push, pop, and min should all
operate in O(1) time.

*/

class StackMin {
  constructor() {
    this.stack = [];
    this.length = 0;
    this.min = 0;
  }

  min() {
    return this.min;
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
