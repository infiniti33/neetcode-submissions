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
        if (!root) {
            return true;
        }
        const isValid = [true];
        this.validate(root, -Infinity, Infinity, isValid);
        return isValid[0];
    }

    validate(root, min, max, isValid) {
        if (!root) {
            return;
        }
        if ((root.val <= min) || (root.val >= max)) {
            isValid[0] = false;
            return;
        }
        this.validate(root.left, min, root.val, isValid);
        this.validate(root.right, root.val, max, isValid);
    }
}
