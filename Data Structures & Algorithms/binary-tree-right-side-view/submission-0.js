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
        const result = [];
        const q = new Queue();
        q.enqueue(root);

        while (q.size()) {
            const lvlSize = q.size();
            for (let i = 0; i < lvlSize; i++) {
                const current = q.pop();
                if (current) {
                    if (i === lvlSize - 1) {
                        result.push(current.val);
                    }
                    if (current.left) {
                        q.enqueue(current.left);
                    }
                    if (current.right) {
                        q.enqueue(current.right);
                    }
                }
            }
        }

        return result;


    }
}
