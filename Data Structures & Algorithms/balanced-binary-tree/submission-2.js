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

        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);

        let balanced = false;
        if (Math.abs(leftHeight - rightHeight) <= 1) {
            balanced = true;
        }

        return balanced && this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    getHeight(node) {
        if (!node) {
            return 0;
        }

        const left = this.getHeight(node.left);
        const right = this.getHeight(node.right);

        return 1 + Math.max(left, right);
    }
}
