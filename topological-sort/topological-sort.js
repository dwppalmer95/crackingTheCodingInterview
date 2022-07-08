
// completed 07-07-2022
// time: O(N^2); space: O(N)
const topological_sort = function(vertices, edges) {
  const sortedNodes = [];
	const parentToChildren = {};
	const incomingEdgeCt = {};
	for (let i = 0; i < edges.length; i++) {
		const edge = edges[i];
		const parentNode = edge[0];
		const childNode = edge[1];
		if (!parentToChildren[parentNode]) parentToChildren[parentNode] = [];
		if (!incomingEdgeCt.hasOwnProperty(childNode)) incomingEdgeCt[childNode] = 0;
		parentToChildren[parentNode].push(childNode);
		incomingEdgeCt[childNode]++;
	}
	while (Object.keys(parentToChildren).length) {
		const parentsToDelete = [];
		for (const [parent, children] of Object.entries(parentToChildren)) {
			// parent is a source node if it has no incoming edges
			if (!incomingEdgeCt[parent]) {
				sortedNodes.push(parent);
				for (let i = 0; i < children.length; i++) {
					incomingEdgeCt[children[i]]--;
				}
				parentsToDelete.push(parent);
			}
		}	
		for (let parent of parentsToDelete) {
			delete parentToChildren[parent];
			delete incomingEdgeCt[parent];
		}
	}
	for (let sink in incomingEdgeCt) {
		sortedNodes.push(sink);	
	}
  return sortedNodes;
};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
