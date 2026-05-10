class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLetters = new Map();
        const tLetters = new Map();
        for (const letter of s) {
            sLetters.set(letter, (sLetters.get(letter) ?? 0) + 1)
        }
        for (const letter of t) {
            tLetters.set(letter, (tLetters.get(letter) ?? 0) + 1)
        }
        for (const [letter, count] of sLetters) {
            if (tLetters.get(letter) !== count) return false;
        }
        for (const [letter, count] of tLetters) {
            if (sLetters.get(letter) !== count) return false;
        }
        return true;
    }
}
