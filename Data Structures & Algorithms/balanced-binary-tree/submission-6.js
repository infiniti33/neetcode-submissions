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
     * @return {boolean}
     */
    isBalanced(root) {
        const isBal = [true];

        this.getBal(root, isBal);

        return isBal[0];
    }

    getBal(node, isBalanced) {
        if (!node) {
            return 0;
        }

        const leftHeight = this.getBal(node.left, isBalanced);
        const rightHeight = this.getBal(node.right, isBalanced);
        
        if (Math.abs(leftHeight - rightHeight) > 1) {
            isBalanced[0] = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
