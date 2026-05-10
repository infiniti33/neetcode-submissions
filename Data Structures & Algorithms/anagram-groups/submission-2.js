class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = [];
        const map = {};
        for (const s of strs) {
            const freq = new Array(26).fill(0);
            for (const c of s) {
                const pos = c.charCodeAt(0) - 'a'.charCodeAt(0);
                freq[pos] += 1;
            }
            const key = freq.join(',');
            if (!map[key]) map[key] = [];
            map[key].push(s);
        }
        for (const k of Object.keys(map)) {
            anagrams.push(map[k]);
        }
        return anagrams;
    }
}
