const Stack = require('./stack.js');

/*

Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too
high, it might topple. Therefore, in real life, we would likely start a new
stack when the previous stack exceeds some threshold. Implement a data structure
SetOfStacks that mimics this. SetOfStacks should be composed of several stacks
and should create a new stack once the previous one exceeds capacity.
SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single
stack (that is, pop() should return the same values as it would if there were
just a single stack).

FOLLOW UP
Implement a function popAt(index) which performs a pop operation on a specific
sub-stack.

*/

class PlatesStack {
  constructor() {
    this.stack = [new Stack()];
    this.lastPos = 0;
    this.cap = 10;
  }

  pop() {
    let result = this.stack[this.lastPos].pop();
    if (this.stack[this.lastPos].length == 0 && this.lastPos > 0) {
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
