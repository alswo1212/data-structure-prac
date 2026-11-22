class Heap<T> {
  private items: T[] = [];
  constructor(private cmp: (a: T, b: T) => number) {}
  get size() {return this.items.length;}
  get isEmpty(){return this.size === 0;}

  push(data: T) {
    const items = this.items;
    items.push(data);
    let i = items.length - 1;
    while (i) {
      const p = (i - 1) >> 1;
      if (this.cmp(items[p], items[i]) <= 0) break;
      [items[p], items[i]] = [items[i], items[p]];
      i = p;
    }
  }

  pop(): T | undefined {
    const items = this.items, top = items[0], last = items.pop();
    if (items.length){
      items[0] = last!;
      let i = 0;
      while (i < items.length){
        const left = (i << 1) + 1, right = left + 1;
        let next = i;
        if (left < items.length && this.cmp(items[left], items[next]) < 0) next = left;
        if (right < items.length && this.cmp(items[right], items[next]) < 0) next = right;
        if (next === i) break;
        [items[next], items[i]] = [items[i], items[next]];
        i = next;
      }
    }
    return top;
  }
  peek(): T | undefined {return this.items[0]}
}
