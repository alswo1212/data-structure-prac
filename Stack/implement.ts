class Stack<T> {
  private items: T[] = [];
  get size() {
    return this.items.length;
  }
  get isEmpty() {
    return this.items.length === 0;
  }

  push(data: T) {
    this.items.push(data);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}
