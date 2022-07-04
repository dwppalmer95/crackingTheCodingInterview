class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

// completed: 07-04-2022
// time: O(N) where N is # nodes; space: O(H) where H is height of tree
const has_path = function(root, s, sum = 0) {
  sum += root.value;
  if (root.left) {
    if (has_path(root.left, s, sum)) return true;
  }
  if (root.right) {
    if (has_path(root.right, s, sum)) return true;
  }
  if (!root.left && !root.right) {
    if (sum === s) return true;
  }
  sum -= root.value;
  return false;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
