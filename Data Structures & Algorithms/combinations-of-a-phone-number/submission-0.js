class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];
        const mapping = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        }
        const result = [];

        const dfs = (start, path) => {
            if (start === digits.length) {
                result.push(path.join(''));
                return;
            }
            const digit = digits[start];
            const chars = mapping[digit];

            // iterate through every character for this digit
            for (let i = 0; i < chars.length; i++) {
                // add current to path
                path.push(chars[i]);
                // dfs starting at next digit
                dfs(start + 1, path);
                path.pop();
            }
        }

        dfs(0, []);

        return result;
    }
}
