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
            return null;
        }

        const stack = [root];
        while (stack.length) {
            const current = stack.pop();
            const tempR = current.right;
            current.right = current.left;
            current.left = tempR;
            if (current.left) {
                stack.push(current.left);
            }
            if (current.right) {
                stack.push(current.right);
            }
        }

        return root;
    }
}
