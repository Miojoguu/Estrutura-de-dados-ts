class No<T> {
  value: T | null;
  next: No<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class ListaLincada<T> {
  head: No<T> | null = null;

  preappend(value: T) {
    let newNode = new No(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  shift() {
    if (!this.head) {
      return null;
    }

    let oldhead = this.head;
    this.head = this.head.next;
    return oldhead.value;
  }

  append(value: T) {
    if (!this.head) {
      return null;
    }
    let newNode = new No(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      let oldhead = this.head;
      this.head = null;
      return oldhead.value;
    }
    let current = this.head;
    while (current.next!.next) {
      current = current.next!;
    }
    let lastNode = current.next;
    current.next = null;
    return lastNode!.value;
  }
}

let lista = new ListaLincada();
lista.preappend(3);
lista.preappend(2);
lista.preappend(1);
lista.append(4);
console.log(lista.pop());
console.log(lista.shift());

console.log(lista);
