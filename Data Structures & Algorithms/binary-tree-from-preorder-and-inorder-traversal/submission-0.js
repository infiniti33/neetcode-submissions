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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) return null;

        const root = new TreeNode(preorder[0]);
        let current = inorder.indexOf(preorder[0]);

        root.left = this.buildTree(preorder.slice(1, current + 1), inorder.slice(0, current));
        root.right = this.buildTree(preorder.slice(current + 1), inorder.slice(current + 1));

        return root;
    }
}
