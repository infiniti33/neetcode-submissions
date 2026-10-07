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
    maxPathSum(root) {
        const max = [-Infinity];
        this.dfs(root, max);
        return max[0];
    }

    dfs(node, max) {
        if (!node) return 0;

        const left = Math.max(this.dfs(node.left, max), 0);
        const right = Math.max(this.dfs(node.right, max), 0);

        const sum = node.val + left + right;
        max[0] = Math.max(max[0], sum);

        return node.val + Math.max(left, right);
    }
}
