/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const levels = [];
        const q = new Queue();
        q.enqueue(root);

        while (q.size()) {
            const level = [];
            const numLvlNodes = q.size();
            for (let i = 0; i < numLvlNodes; i++) {
                const current = q.pop();
                if (current) {
                    level.push(current.val);
                    q.enqueue(current.left);
                    q.enqueue(current.right);
                }
            }
            if (level.length) {
                levels.push(level);
            }
        }

        return levels;
    }
}
