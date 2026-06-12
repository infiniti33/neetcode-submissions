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
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        const stack = [[root, 1]];
        let maxDepth = 0;
        while (stack.length) {
            const current = stack.pop();
            const node = current[0];
            const depth = current[1];
            maxDepth = Math.max(maxDepth, depth);
            if (node.right) {
                stack.push([node.right, depth + 1]);
            }
            if (node.left) {
                stack.push([node.left, depth + 1]);
            }
        }

        return maxDepth;
    }
}
