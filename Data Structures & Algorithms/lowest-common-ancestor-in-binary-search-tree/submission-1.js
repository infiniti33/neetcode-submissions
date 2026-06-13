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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) {
            return null;
        }

        if (p.val === root.val || q.val === root.val) {
            return root;
        }
        const max = Math.max(p.val, q.val);
        const min = max === p.val ? q.val : p.val;
        if (root.val > min && root.val < max) {
            return root;
        }
        if (root.val > min && root.val > max)  {
            return this.lowestCommonAncestor(root.left, p, q);
        } else {
            return this.lowestCommonAncestor(root.right, p, q);
        }
    }
}
