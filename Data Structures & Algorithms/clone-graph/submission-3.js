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
        const firstClone = new Node(node.val);
        clones.set(node, firstClone);

        const stack = [[node, firstClone]];

        while (stack.length) {
            const [original, clone] = stack.pop();

            for (const neighbor of original.neighbors) {
                if (!clones.has(neighbor)) {
                    clones.set(neighbor, new Node(neighbor.val));
                    stack.push([neighbor, clones.get(neighbor)]);
                }
                clone.neighbors.push(clones.get(neighbor));
            }
        }

        return firstClone;
    }
}
