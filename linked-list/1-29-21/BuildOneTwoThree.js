// https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  return push(push(new Node(3), 2), 1);
}
