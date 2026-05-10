class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const seenS = {};
        const seenT = {};

        for (const c of s) {
            seenS[c] = (seenS[c] || 0) + 1;
        }
        for (const c of t) {
            seenT[c] = (seenT[c] || 0) + 1;
        }
        for (const c of Object.keys(seenS)) {
            if (seenS[c] !== seenT[c]) return false;
        }

        return true;
    }
}
