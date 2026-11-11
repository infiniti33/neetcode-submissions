class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        const generate = (open, closed, path) => {
            if (closed > open || open > n) return;
            if (path.length === 2 * n) {
                result.push(path);
                return;
            }
            generate(open + 1, closed, path + '(');
            generate(open, closed + 1, path + ')');
        }

        generate(0, 0, '');

        return result;
    }
}
 