class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const s of strs) {
            const chars = new Array(26).fill(0);
            for (const c of s) {
                chars[c.charCodeAt(0) - 'a'.charCodeAt(0)]++; 
            }
            const key = chars.join(',');
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(s)
        }

        return Object.values(map);
    }
}
