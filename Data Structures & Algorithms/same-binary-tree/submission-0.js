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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }
        if (p && q && p.val === q.val) {
            return (this.isSameTree(q.left, p.left) && this.isSameTree(q.right, p.right));
        } else {
            return false;
        }
    }
}
