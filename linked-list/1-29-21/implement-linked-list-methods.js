class Node{
  constructor(date, next = null){
    this.date = date;
    this.next = next;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

//LinkedList Class
class LinkedList {
  constructor() {
    this.head = null; //first node of the Linked List
    this.size = 0; //Track size of the linked list
  }
// get the head
  getFirst(){
    return this.head;
  }
// get the tail
  getLast(){
     // setting the last node to be the head to start off with
    let lastNode = this.head;
    // checking if this list is not empty by checking for head which we stored in variable lastNode
    if (lastNode) {
      // looping though and checking if theres a next property
      while (lastNode.next) {
        // setting lastNode to be the next property of the LastNode
        lastNode = lastNode.next;
      }
    }
    return lastNode
  }
  //Insert to head
  insertToHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert into the tail
  insertToTail(data) {
    const node = new Node(data);
    let tail = null;
    //if empty, make it head
    if (!this.head) {
      this.head = node;
    } else {
      tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
    this.size++;
  }

  //Insert at random position
  insertAt(data, index) {
    //if it's empty
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    //if it needs add to the front of the list
    if (index === 0) {
      this.insertToHead(data); //reuse insertToHead function
      return;
    }
    let node = new Node(data);
    let current, previous;
    let count = 0;
    // current will be first
    current = this.head;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
}

const linkedList = new LinkedList();
linkedList.insertToHead(100);
linkedList.insertToHead(200);
linkedList.insertToHead(300);
linkedList.insertToTail(400);
linkedList.insertAt(600, 2);
