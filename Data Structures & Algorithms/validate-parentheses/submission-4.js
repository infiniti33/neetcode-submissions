class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const mapping = {
            '(': ')',
            '{': '}',
            '[': ']',
        }

        const stack = [];
        for (const b of s) {
            if (mapping[b]) {
                stack.push(b);
            } else {
                const open = stack.pop();
                if (mapping[open] !== b) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
