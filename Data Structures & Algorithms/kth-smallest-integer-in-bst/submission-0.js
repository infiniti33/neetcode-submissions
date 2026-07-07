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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const result = [null];
        let lvl = 0;
        const dfs = (node) => {
            if (!node) return;

            dfs(node.left);

            lvl++;

            if (lvl === k) {
                result[0] = node.val;
            }

            dfs(node.right);
        }

        dfs(root);

        return result[0];
    }
}
