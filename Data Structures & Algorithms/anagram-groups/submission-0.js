class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const resultMap = new Map();
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < strs.length; i++) {
            const letters = new Array(26);
            for (const letter of strs[i]) {
                const position = alphabet.indexOf(letter);
                if (typeof letters[position] === 'number') {
                    letters[position] += 1;
                } else {
                    letters[position] = 1;
                }
            }
            let found = false;
            for (const [key, value] of resultMap) {
                for (let k = 0; k < key.length; k++) {
                    if (key[k] !== letters[k]) break;
                    if (k === 25) {
                        value.push(strs[i])
                        found = true;
                    }
                }
            }
            if (!found) {
                resultMap.set(letters, [strs[i]])
            }
        }
        return [...resultMap.values()];
    }
}
