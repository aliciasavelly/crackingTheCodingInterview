const LinkedList = require('../Chapter2/linkedList.js');

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
    this.dogList = new LinkedList();
    this.catList = new LinkedList();
    this.pos = 0;
  }

  enqueue(value) {
    if (value == "dog") {
      this.dogList.append(pos);
    } else {
      this.catList.append(pos);
    }

    pos++;
  }

  dequeueAny() {
    if (this.dogList.head.value < this.catList.head.value) {
      this.dogList.head = this.dogList.head.next;
    } else {
      this.catList.head = this.catList.head.next;
    }
  }

  dequeueDog() {
    this.dogList.head = this.dogList.head.next;
  }

  dequeueCat() {
    this.catList.head = this.catList.head.next;
  }
}
