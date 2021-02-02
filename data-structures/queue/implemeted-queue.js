// Please Implement a Queue including it's helper methods:  add(enqueue), remove(dequeue), first, last, and size

class Queue{
  constructor(){
    this.queue = {}
    this.head = 0
    this.tail = 0
  }
  
  enqueue(el){
    this.queue[this.tail] = el;
    this.tail++;
  }
  
  dequeue(){
    let value = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return value;
  }
  
  size(){
    return Object.keys(this.queue).length;
  }
  
}
