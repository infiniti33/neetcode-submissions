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
    isValidBST(root) {
        return this.validate(root, -Infinity, Infinity);
    }

    validate(node, min, max) {
        if (!node) {
            return true;
        }
        if (!(node.val > min && node.val < max)) {
            return false;
        }
        return this.validate(node.left, min, node.val) && this.validate(node.right, node.val, max);
    }
}
