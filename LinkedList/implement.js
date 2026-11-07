class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  append(data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node
    this.length++;
  }

  remove(data) {
    let prev = null;
    let target = this.head;

    while (target && target.data !== data) {
      prev = target;
      target = target.next
    }
    if (!target) return false;

    if (prev) prev.next = target.next;
    else this.head = target.next;

    if (this.tail === target) this.tail = prev;

    this.length--;
    return true;
  }

  contains(data) {
    let target = this.head;
    while (target && target.data !== data) target = target.next;
    return target?.data === data;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let target = this.head;
    while (index--) target = target.next;
    return target.data;
  }
}