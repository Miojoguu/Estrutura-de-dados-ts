import Queue from "yocto-queue";

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearch<T> {
  root: TreeNode<T> | null = null;
  insert(value: T) {
    this.root = this.insertRecursive(value, this.root);
  }

  insertRecursive(value: T, node: TreeNode<T> | null) {
    if (!node) {
      node = new TreeNode(value);
      return node;
    }

    if (value < node.value) {
      node.left = this.insertRecursive(value, node.left);
    } else {
      node.right = this.insertRecursive(value, node.right);
    }
    return node;
  }
  searchBFS(val: T) {
    if (!this.root) {
      return false;
    }
    let queue = new Queue<TreeNode<T>>();
    queue.enqueue(this.root);
    while (queue.size > 0) {
      let node = queue.dequeue()!;
      if (node.value === val) {
        return true;
      }
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node!.right) {
        queue.enqueue(node.right);
      }
    }
    return false;
  }
}

let treee = new BinarySearch();
treee.insert(5);
treee.insert(3);
treee.insert(1);
treee.insert(10);
treee.insert(7);
treee.insert(15);

console.log(JSON.stringify(treee, null, 2));
// console.log(treee.searchBFS(11));


