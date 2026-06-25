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
        const clone = new Node(node.val);
        const clones = new Map();
        const stack = [[node, clone]];

        while (stack.length) {
            const [original, clone] = stack.pop();
            clones.set(original.val, clone);

            for (let i = 0; i < original.neighbors.length; i++) {
                const originalNeighbor = original.neighbors[i];
                if (clones.has(originalNeighbor.val)) {
                    const cloneNeighbor = clones.get(originalNeighbor.val);
                    clone.neighbors.push(cloneNeighbor);
                } else {
                    const cloneNeighbor = new Node(originalNeighbor.val);
                    clones.set(originalNeighbor.val, cloneNeighbor);
                    clone.neighbors.push(cloneNeighbor);
                    stack.push([originalNeighbor, clones.get(originalNeighbor.val)]);
                }
            }
        }

        return clone;
    }
}
