class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

// ex
  // head = 0
  // head.next = 1
  // head.next.next = 2
  // head.next.next.next = head.next

// copied 05-14-2022
// time: O(N); space: O(1)
const has_cycle1 = function(head) {
  
  let pointerSlow = head, pointerFast = head;
  let skipPointerSlow = true;

  while (pointerFast.next !== null) {
    if (!skipPointerSlow) pointerSlow = pointerSlow.next;
    pointerFast = pointerFast.next;
    skipPointerSlow = !skipPointerSlow;
    if (pointerFast === pointerSlow) return true;
  }

  return false;

}

// completed 05-14-2022
// time: O(N); space: O(1);
const has_cycle2 = function(head) {

  let pointer1 = head;
  let pointer2 = head.next;

  let skipPointer1 = true;
  while (pointer2 !== null) {
    if (pointer2 === pointer1) return true;
    if (!skipPointer1) pointer1 = pointer1.next;
    skipPointer1 = !skipPointer1;
    pointer2 = pointer2.next;
  }
  return false;
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)