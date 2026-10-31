
class Deque {
  items = {};
  front = 0;
  rear = 0;

  get size() { return this.rear - this.front; }
  get isEmpty() { return this.front === this.rear; }

  peekFront() { return this.items[this.front]; }
  peekRear() { return this.items[this.rear - 1]; }

  addRear(val) { this.items[this.rear++] = val; }
  addFront(val) { this.items[--this.front] = val; }

  removeFront() {
    if (this.isEmpty) return undefined;

    const value = this.items[this.front];
    delete this.items[this.front++];

    return value;
  }

  removeRear() {
    if (this.isEmpty) return undefined;

    const value = this.items[--this.rear];
    delete this.items[this.rear];

    return value;
  }
}
