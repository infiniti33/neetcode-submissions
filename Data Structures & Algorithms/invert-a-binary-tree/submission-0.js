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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) {
            return root;
        }
        if (root.left) {
            this.invertTree(root.left);
        }
        if (root.right) {
            this.invertTree(root.right);
        }
        const temp = root.right;
        root.right = root.left;
        root.left = temp;
        return root;
    }
}
