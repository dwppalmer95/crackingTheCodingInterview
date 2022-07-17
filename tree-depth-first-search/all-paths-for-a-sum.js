/*
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

*/


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

// completed: 7/17/2022
// time: O(N); space: O(M) where M is the number of leafs
const find_paths = function(root, sum) {
  const allAcceptablePaths = [];
	
	const find_paths_recursive = (root, sum, currentPath = []) => {

		if (!root) return;
			
		sum -= root.value;
		if (sum < 0) return;
		currentPath.push(root.value);
		
		if (!root.left && !root.right) {
			if (sum === 0) allAcceptablePaths.push(currentPath);
			return;
		}

		find_paths_recursive(root.left, sum, [...currentPath]);
		find_paths_recursive(root.right, sum, [...currentPath]);

	}

	find_paths_recursive(root, sum);
  console.log(allAcceptablePaths);
	return allAcceptablePaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
