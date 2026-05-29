class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openToClose = {
            '(' : ')',
            '{' : '}',
            '[' : ']',
        }

        const stack = [];

        for (const bracket of s) {
            if (openToClose[bracket]) {
                stack.push(bracket);
            } else {
                const open = stack.pop();
                if (openToClose[open] !== bracket) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
