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
        const deque = new Deque();
        const levels = [];
        if (root) {
            deque.pushBack(root);
        }

        while (deque.size()) {
            const level = []
            const size = deque.size();
            for (let i = 0; i < size; i++) {
                const node = deque.popFront();
                level.push(node.val);
                if (node.left) {
                    deque.pushBack(node.left);
                }
                if (node.right) {
                    deque.pushBack(node.right);
                }
            }
            levels.push(level);
        }

        return levels;
    }
}
