class threeInOneStack {
  constructor() {
    this.stack = [];
    this.partition1 = 0;
    this.partition2 = 0;
    this.partition3 = 0;
  }

  pushStack1(value) {
    this.stack.splice(this.partition1, 0, value);
    this.partition1++;
    this.partition2++;
    this.partition3++;
    return value;
  }

  popStack1() {
    this.stack.splice(this.partition1, 1);
    this.partition1--;
    this.partition2--;
    this.partition3--;
  }

  pushStack2(value) {
    this.stack.splice(this.partition2, 0, value);
    this.partition2++;
    this.partition3++;
    return value;
  }

  popStack2() {
    this.stack.splice(this.partition2, 1);
    this.partition2--;
    this.partition3--;
  }

  pushStack3(value) {
    this.stack.splice(this.partition3, 0, value);
    this.partition3++;
    return value;
  }

  popStack3() {
    this.stack.splice(this.partition3, 1);
    this.partition3--;
  }
}
