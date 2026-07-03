/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const nodes = new Map();
        const startNode = new Node(node.val);
        nodes.set(startNode.val, startNode);

        let neighborsList = [[startNode, node.neighbors]];

        while (neighborsList.length) {
            const [parent, neighbors] = neighborsList.pop();

            for (const neighbor of neighbors) {
                if (!nodes.has(neighbor.val)) {
                    nodes.set(neighbor.val, new Node(neighbor.val));
                    neighborsList.push([nodes.get(neighbor.val), neighbor.neighbors]);
                }
                parent.neighbors.push(nodes.get(neighbor.val));
            }
        }

        return startNode;
    }
}
