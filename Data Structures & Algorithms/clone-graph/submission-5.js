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
        const clones = new Map();
        clones.set(node, new Node(node.val));

        const stack = [node];
        while (stack.length) {
            const n = stack.pop();
            const clone = clones.get(n);
            for (const neighbor of n.neighbors) {
                if (!clones.has(neighbor)) {
                    clones.set(neighbor, new Node(neighbor.val));
                    stack.push(neighbor);
                }
                clone.neighbors.push(clones.get(neighbor));
            }
        }

        return clones.get(node);
    }
}
