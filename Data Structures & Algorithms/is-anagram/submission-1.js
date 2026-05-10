class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const sLetters = new Map();
        const tLetters = new Map();
        for (let i = 0; i < s.length; i++) {
            sLetters.set(s[i], (sLetters.get(s[i]) ?? 0) + 1)
            tLetters.set(t[i], (tLetters.get(t[i]) ?? 0) + 1)
        }
        for (let i = 0; i < s.length; i++) {
            if (sLetters.get(s[i]) !== tLetters.get(s[i])) return false;
            if (tLetters.get(t[i]) !== sLetters.get(t[i])) return false;
        }
        return true;
    }
}
