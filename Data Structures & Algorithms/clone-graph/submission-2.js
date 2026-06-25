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
        const firstClone = new Node(node.val);
        const clones = new Map();
        const stack = [[node, firstClone]];
        clones.set(node, firstClone);

        while (stack.length) {
            const [original, clone] = stack.pop();

            for (let i = 0; i < original.neighbors.length; i++) {
                const neighbor = original.neighbors[i];
                if (clones.has(neighbor)) {
                    const cloneNeighbor = clones.get(neighbor);
                    clone.neighbors.push(cloneNeighbor);
                } else {
                    const cloneNeighbor = new Node(neighbor.val);
                    clones.set(neighbor, cloneNeighbor);
                    clone.neighbors.push(cloneNeighbor);
                    stack.push([neighbor, cloneNeighbor]);
                }
            }
        }

        return firstClone;
    }
}
