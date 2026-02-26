class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return hasPathSumRecursive(root, targetSum);
}

function hasPathSumRecursive(
  node: TreeNode | null,
  targetSum: number,
  sum: number = 0,
): boolean {
  if (node) {
    sum += node.val;
    if (!node.left && !node.right && targetSum === sum) {
      return true;
    } else {
      if (hasPathSumRecursive(node.left, targetSum, sum)) {
        return true;
      }
      if (hasPathSumRecursive(node.right, targetSum, sum)) {
        return true;
      }
    }
  }

  return false;
}
