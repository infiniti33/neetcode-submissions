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
        let max = [0];
        const left = this.getHeight(root.left, max);
        const right = this.getHeight(root.right, max);
        return Math.max(max[0], left + right);
    }

    getHeight(node, max) {
        if (!node) {
            return 0;
        }
        const leftHeight = this.getHeight(node.left, max);
        const rightHeight = this.getHeight(node.right, max);
        max[0] = Math.max(max[0], leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight);
    }
}
