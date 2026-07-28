class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sMap = new Map();
        for (const c of s) {
            if (!sMap.has(c)) {
                sMap.set(c, 0);
            }
            sMap.set(c, sMap.get(c) + 1);
        }
        const tMap = new Map()
        for (const c of t) {
            if (!tMap.has(c)) {
                tMap.set(c, 0);
            }
            tMap.set(c, tMap.get(c) + 1);
        }
        for (const c of sMap.keys()) {
            if (sMap.get(c) !== tMap.get(c)) return false;
        }
        return true;
    }
}
