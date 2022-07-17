/*
  Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
*/


class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

// completed: 05-17-2022
// time: O(N); space: O(N)
const traverse = function(root) {
  const nodeCache = [], valuesCache = [];
	nodeCache.push(root);
	
	while(nodeCache.length) {
	
		const valuesByLevel = [];
		const nodesOnThisLevel = nodeCache.length;

		for (let i = 0; i < nodesOnThisLevel; i++) {
		
			const currentNode = nodeCache.shift();
			valuesByLevel.push(currentNode.value);
			if (currentNode.left) nodeCache.push(currentNode.left);
			if (currentNode.right) nodeCache.push(currentNode.right);
		
		}
		valuesCache.unshift(valuesByLevel);
	}
	return valuesCache;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(traverse(root));
console.log(`Reverse level order traversal: ${traverse(root)}`)
