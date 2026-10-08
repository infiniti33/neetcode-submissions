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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const q = [root];
        const resultQ = [];

        while (q.length) {
            const size = q.length;
            for (let i = 0; i < size; i++) {
                const node = q.shift();
                if (node) {
                    q.push(node.left);
                    q.push(node.right);
                    resultQ.push(node.val);
                } else {
                    resultQ.push('');
                }
            }
        }
        return resultQ.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data.length === 1 && data[0] === '') return null;
        const dataQ = data.split(',');
        const root = new TreeNode(dataQ[0]);
        const q = [root];

        let i = 1;
        while (i < dataQ.length) {
            const parent = q.shift();
            const leftVal = dataQ[i++];
            const rightVal = dataQ[i++];
            if (leftVal !== '') {
                parent.left = new TreeNode(leftVal);
                q.push(parent.left);
            } else {
                parent.left = null;
            }
            if (rightVal !== '') {
                parent.right = new TreeNode(rightVal);
                q.push(parent.right);
            } else {
                parent.right = null;
            }
        }

        return root;
    }
}
