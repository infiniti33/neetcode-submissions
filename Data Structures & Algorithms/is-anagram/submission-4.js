class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = {};
        const tMap = {};

        for (const c of s) {
            sMap[c] = (sMap[c] || 0) + 1;
        }
        for (const c of t) {
            tMap[c] = (tMap[c] || 0) + 1;
        }

        for (const c of s) {
            if (sMap[c] !== tMap[c]) {
                return false;
            }
        }

        return true;
    }
}
