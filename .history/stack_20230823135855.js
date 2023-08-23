class Stack {
  constructor(maxElement = 10) {
    if (isNaN(maxElement) || !isFinite(maxElement)) {
      throw new Error("The max element must be a valid number");
    }

    this.maxElement = maxElement;
    this.top = null;
    this.size = 0;
  }

  push(elem) {
    if (this.size >= this.maxElement) {
      throw new Error("The stack is full");
    }
    const newNode = { elem: elem, next: this.top };
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      throw new Error("The stack is empty");
    }
    const poppedNode = this.top;
    this.top = poppedNode.next;
    this.size--;

    return poppedNode.elem;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }
    return this.top.elem;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const arr = [];
    let curr = this.top;

    while (curr) {
      arr.push(curr.elem);
      curr = curr.next;
    }

    return arr;
  }

  static fromIterable(iterable) {
    const isIterable =
      iterable !== null ||
      iterable !== undefined ||
      typeof iterable[Symbol.iterator] !== "function";

    if (!isIterable) {
      throw new Error("The input is not iterable");
    }

    const newStack = new Stack(iterable.length);

    for (const elem of iterable) {
      newStack.push(elem);
    }

    return newStack;
  }
}

const stack = new Stack(-1);
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.toArray())

console.log(stack.size);

module.exports = { Stack };
