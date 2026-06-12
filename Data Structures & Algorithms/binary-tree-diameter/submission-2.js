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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (!root) {
            return 0;
        }
        const max = [0];
        const left = this.getHeight(root.left, max);
        const right = this.getHeight(root.right, max);
        max[0] = Math.max(max[0], left + right);
        return max[0];
    }

    getHeight(node, max) {
        if (!node) {
            return 0;
        }
        const left = this.getHeight(node.left, max);
        const right = this.getHeight(node.right, max);
        max[0] = Math.max(max[0], left + right);
        return 1 + Math.max(left, right);
    }
}
