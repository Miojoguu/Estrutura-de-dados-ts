class N<T> {
  value: T;
  next: N<T> | null = null;
  prev: N<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  public head: N<T> | null = null;
  public tail: N<T> | null = null;
  public len: number = 0;

  append(data: T): void {
    let newNode = new N(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.len++;
  }
  prepend(data: T) {
    let newNode = new N(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.len++;
  }
  deleteHead() {
    if (this.head == null) {
      return null;
    }
    let oldHead = this.head;
    if (this.len <= 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
    }
    this.len--;
    return oldHead;
  }
  deleteTail() {
    if (this.tail == null) {
      return null;
    }
    let oldTail = this.tail;
    if (this.len <= 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail!.next = null;
    }
    this.len--;
    return oldTail;
  }
}

let dLL = new DoublyLinkedList();
dLL.append(1);
dLL.append(2);
dLL.append(3);
dLL.append(4);
dLL.append(5);
console.log(`dado removido: `);
console.log(dLL.deleteTail());
console.log("-----------------------");

// dLL.deleteTail();
console.log(dLL);

console.log("-----------------------");
console.log(`dado removido: `);
console.log(dLL.deleteHead());

console.log(dLL);
