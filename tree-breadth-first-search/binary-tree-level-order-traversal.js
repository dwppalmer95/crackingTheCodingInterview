class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// completed 07-04-2022
// time: O(N); space: O(N) where N is number of nodes
const traverse = function(root) {
  let levelNodeArr = [];
  const bstArr = [];
  levelNodeArr.push(root);
  let ct = 0;
  while (levelNodeArr[0]) {
    const nextLevelNodeArr = [];
    const levelValueArr = [];
    for (let i = 0; i < levelNodeArr.length; i++) {
      const node = levelNodeArr[i];
      levelValueArr.push(node.val);
      if (node.left) nextLevelNodeArr.push(node.left);
      if (node.right) nextLevelNodeArr.push(node.right);
    }
    levelNodeArr = nextLevelNodeArr;
    bstArr.push(levelValueArr);
  }
  console.log(bstArr);
  return bstArr;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
