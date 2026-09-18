class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        const backtrack = (open, closed, str) => {
            if (closed > open || open > n) return;
            if (str.length === 2 * n) {
                return result.push(str);
            }
            backtrack(open + 1, closed, str + '(');
            backtrack(open, closed + 1, str + ')');
        }

        backtrack(0, 0, '');

        return result;
    }
}
