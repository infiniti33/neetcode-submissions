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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) {
            return true;
        }
        if (!root) {
            return false;
        }
        if (this.isEqual(root, subRoot)) {
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isEqual(tree1, tree2) {
        if (!tree1 && !tree2) {
            return true;
        }
        if (tree1 && tree2 && tree1.val === tree2.val) {
            return (this.isEqual(tree1.left, tree2.left) && this.isEqual(tree1.right, tree2.right));
        }
        return false;
    }
}
