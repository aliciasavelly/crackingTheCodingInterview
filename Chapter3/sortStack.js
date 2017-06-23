const Stack = require('./stack.js');

/*

Sort Stack: Write a program to sort a stack such that the smallest items are on
the top. You can use an additional temporary stack, but you may not copy the
elements into any other data structures (such as an array). The stack supports
the following operations: push, pop, peek, and isEmpty.

*/

function SortStack(stack) {
  let current;
  let topRight = -Infinity;
  let stack2 = new Stack();
  let count = 0;

  while (stack.length > 0) {
    current = stack.pop();
    console.log(current);
    if (topRight < current) {
      stack2.push(current);
    } else {
      while (topRight > current) {
        count++;
        stack.push(stack2.pop());
        topRight = stack2.peek();
      }
      stack2.push(current);
      for (let i = 0; i < count; i++) {
        stack2.push(stack.pop());
      }
      count = 0;
    }
    topRight = stack2.peek();
  }

  while (stack2.length > 0) {
    stack.push(stack2.pop());
  }

  return stack;
}

let stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(99);
stack.push(1);
stack.push(8);
stack.push(4);
stack.push(2);

console.log(SortStack(stack));
