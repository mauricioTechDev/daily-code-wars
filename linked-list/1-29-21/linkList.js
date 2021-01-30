// Task 1: Please Implement a Linked List Including it's helper methods: 
// size, clear, getLast, getFirst - you should be able to do this from memory

export class Node {
  constructor(val){
    this.data = data;
    this.nest = next;
  }
}

export class LNode {
  constructor(){
    this.nodeHead = null;
  };

  size() {
    if(this.head === null) return 0;
    let node = this.head;
    let counter = 0;
    while(node !== null) {
      node = node.next;
      counter++;
    }
    return length;
  }

  clear() {
      this.head = null;
  }

  getLast() {
      let node = this.head;
      while(node) {
          if(!node.next) return node;
          node = node.next;
      }
      return null;
  }
  getFirst() {
      return this.head;
  }

}
