class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (const s of strs) {
            const counts = Array.from({ length: 26 }).fill(0);
            for (const c of s) {
                const code = c.charCodeAt(0) - 'a'.charCodeAt(0);
                counts[code]++;
            }
            const key = counts.join(',');
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(s);
        }
        return Object.values(groups);
    }
}
