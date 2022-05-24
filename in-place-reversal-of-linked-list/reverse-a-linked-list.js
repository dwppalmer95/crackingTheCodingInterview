class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


// completed 05-22-2022
// time: O(N); space: O(1)
const reverse = function(head) {
  // riedag
  // 1. restate
    // given the head of a singly linked list, return the reversed linked list
    // space requirement = O(1)
  // 2. i/o
    // inputs: head of a singly linked list
    // outputs: head of the reversed linkdlist
  // 3. edge cases/examples
    // examples
      // head(4) -> node(2) -> node(3) -> node(5) => head(5) -> node (3) -> node(2) -> node(4)
    // edge cases
      // cyclical linked list
      // input errors (i.e. not a linked lst)
      // linked list of one node
  // 4. data strcutures
    // linked list
  // 5. algoo paterns
    // reversal of a linked list
  // 6. general appraoch
    // create a variable called current, set equal to head
    // create a variable called previous, set equal to null
    // while current is not null
      // nextNode = current.next
      // current.next = previous
      // previous = current
      // current = nextNode
    // return current
  let current = head;
  let reversedHead = null;
  while (current) {
    const next = current.next;
    current.next = reversedHead;
    reversedHead = current;
    current = next;
  }
  return reversedHead;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)

