class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];
        const mapping = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz',
        }
        const result = [];

        const backtrack = (index, chars) => {
            if (index === digits.length) {
                result.push(chars.join(''));
                return;
            }
            const mappedChars = mapping[digits[index]];
            for (let i = 0; i < mappedChars.length; i++) {
                chars.push(mappedChars[i]);
                backtrack(index + 1, chars);
                chars.pop();
            }
        }

        backtrack(0, []);

        return result;
    }
}
