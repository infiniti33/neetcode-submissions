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
     * @return {number[]}
     */
    rightSideView(root) {
        const q = [root];
        const result = [];

        while (q.length) {
            const lvlSize = q.length;
            for (let i = 0; i < lvlSize; i++) {
                const current = q.shift();
                if (current) {
                    if (i === lvlSize - 1) {
                        result.push(current.val);
                    }
                    if (current.left) {
                        q.push(current.left);
                    }
                    if (current.right) {
                        q.push(current.right);
                    }
                }
            }
        }

        return result;
    }
}
