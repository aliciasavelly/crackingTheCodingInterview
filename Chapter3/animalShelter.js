const SinglyLinkedList = require('../Chapter2/singlyLinkedList.js');

/*

Animal Shelter: An animal shelter, which holds only dogs and cats, operates on
a strictly "first in, first out" basis. People must adopt either the "oldest"
(based on arrival time) of all animals at the shelter, or they can select
whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the
data structures to maintain this system and implement operations such as
enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in
LinkedList data structure.

*/

class AnimalShelter {
  constructor() {
    this.firstDog;
    this.firstCat;
    this.dogList = new SinglyLinkedList();
    this.catList = new SinglyLinkedList();
    this.pos = 0;
  }

  enqueue(value) {
    if (value == "dog") {
      this.dogList.append(this.pos);
    } else {
      this.catList.append(this.pos);
    }

    this.pos++;
  }

  dequeueAny() {
    if (this.dogList.length > 0 && this.catList.length > 0 && this.dogList.head.value < this.catList.head.value) {
      this.rmDog();
    } else if (this.dogList.length > 0 && this.catList.length > 0) {
      this.rmCat();
    } else if (this.dogList.length > 0) {
      this.rmDog();
    } else if (this.catList.length > 0) {
      this.rmCat();
    }
  }

  dequeueDog() {
    if (this.dogList.length > 0) {
      this.rmDog();
    }
  }

  dequeueCat() {
    if (this.catList.length > 0) {
      this.rmCat();
    }
  }

  rmCat() {
    this.catList.head = this.catList.head.next;
    this.catList.length--;
  }

  rmDog() {
    this.dogList.head = this.dogList.head.next;
    this.dogList.length--;
  }

  peek() {
    if (this.dogList.length > 0 && this.catList.length > 0) {
      if (this.dogList.head.value < this.catList.head.value) {
        return "Next is a dog!";
      } else {
        return "Next is a cat!";
      }
    } else if (this.dogList.length > 0) {
      return "Next is a dog!";
    }
    return "Next is a cat!";
  }
}

a = new AnimalShelter();
a.enqueue("dog");
a.enqueue("cat");
a.enqueue("dog");
a.enqueue("dog");
a.enqueue("cat");
a.enqueue("cat");
a.enqueue("cat");
a.enqueue("dog");
a.enqueue("dog");
console.log(a.peek() === "Next is a dog!");
a.dequeueAny();
console.log(a.peek() === "Next is a cat!");
a.dequeueDog();
console.log(a.peek() === "Next is a cat!");
a.dequeueCat();
console.log(a.peek() === "Next is a dog!");
a.dequeueAny();
console.log(a.peek() === "Next is a cat!");
a.dequeueDog();
a.dequeueDog();
console.log(a.peek() === "Next is a cat!");
a.dequeueDog();
console.log(a.peek() === "Next is a cat!");
a.dequeueAny();
console.log(a.peek() === "Next is a cat!");
a.dequeueCat();
console.log(a.peek() === "Next is a cat!");
