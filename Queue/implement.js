class Queue {
  items = [];
  cursor = 0;

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items[this.cursor++];
  }

  peek() {
    return this.items[this.cursor];
  }

  isEmpty() {
    return this.items.length === this.cursor;
  }

  get size() {
    return this.items.length - this.cursor;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.size);