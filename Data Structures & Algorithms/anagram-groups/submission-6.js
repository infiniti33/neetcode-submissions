class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (const str of strs) {
            const charFreq = new Array(26).fill(0);
            for (const c of str) {
                const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                charFreq[index]++;
            }
            const key = charFreq.join(',');
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(str);
        }

        return Object.values(groups);
    }
}
