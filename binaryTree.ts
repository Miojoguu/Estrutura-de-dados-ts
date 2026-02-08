class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertRecursive(newNode, this.root);
    }
  }

  insertRecursive(newNode: TreeNode<T>, node: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertRecursive(newNode, node.left);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertRecursive(newNode, node.right);
      }
    }
  }
  search(value: T) {
    return this.searchRecursive(value, this.root);
  }
  searchRecursive(value: T, node: TreeNode<T> | null): Boolean {
    if (!node) {
      return false;
    }
    if (value == node.value) {
      return true;
    }

    if (value < node.value) {
      return this.searchRecursive(value, node.left);
    } else {
      return this.searchRecursive(value, node.right);
    }
  }
}

const tree = new BinaryTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(5);
tree.insert(15);
tree.insert(2);
console.log(tree.search(500));
