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
        if (!root) {
            return true;
        }
        let balanced = [true];
        this.getHeight(root, balanced);
        return balanced[0];
    }

    getHeight(node, balanced) {
        if (!node) {
            return 0;
        }
        const leftHeight = this.getHeight(node.left, balanced);
        const rightHeight = this.getHeight(node.right, balanced);
        if (Math.abs(leftHeight - rightHeight) > 1) {
            balanced[0] = false;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
}
