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
  inorder() {
    let array: T[] = [];
    this.inorderRecursive(this.root, array);
    return array;
  }
  inorderRecursive(node: TreeNode<T> | null, nums: T[]) {
    if (node) {
      this.inorderRecursive(node.left, nums);
      nums.push(node.value);
      this.inorderRecursive(node.right, nums);
    }
  }
  preorder() {
    let array: T[] = [];
    this.preorderRecursive(this.root, array);
    return array;
  }
  preorderRecursive(node: TreeNode<T> | null, nums: T[]) {
    if (node) {
      nums.push(node.value);
      this.preorderRecursive(node.left, nums);
      this.preorderRecursive(node.right, nums);
    }
  }
  posorder() {
    let array: T[] = [];
    this.posorderRecursive(this.root, array);
    return array;
  }
  posorderRecursive(node: TreeNode<T> | null, nums: T[]) {
    if (node) {
      this.posorderRecursive(node.left, nums);
      this.posorderRecursive(node.right, nums);
      nums.push(node.value);
    }
  }
  search(val: T) {
    return this.searchRecursive(val, this.root);
  }

  searchRecursive(val: T, node: TreeNode<T> | null) {
      
      if (node) {
        console.log(node.value);
      if (node.value === val) {
        return true;
      }
      if (this.searchRecursive(val, node.left)) {
        return true;
      }
      if (this.searchRecursive(val, node.right)) {
        return true;
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
console.log(treee.search(10));

// console.log(treee.preorder()); // Esperado: [ 5, 3, 1, 10, 7, 15]
// console.log(treee.inorder()); // Esperado: [ 1 , 3, 5, 7, 10, 15]
// console.log(treee.posorder()); // Esperado: [ 1, 3, 7, 15, 10, 5 ]
