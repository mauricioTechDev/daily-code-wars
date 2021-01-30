// Code War 2
// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let node = head;
  let counter = 0;
  while(node) {
    node = node.next;
    counter++;
  }
  return counter;
}

function count(head, data) {
  let node = head;
  let counter = 0;
  while(node) {
    if(node.data === data) counter++;
    node = node.next;
  }
  return counter;
}
