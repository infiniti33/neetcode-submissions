class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const chars = new Map();
        let longest = 0;
        let maxFreq = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            chars.set(s[r], (chars.get(s[r]) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, chars.get(s[r]));
            if ((r - l + 1) - maxFreq > k) {
                chars.set(s[l], chars.get(s[l]) - 1);
                l++;
            }
            longest = Math.max(longest, r - l + 1);
        }
        return longest;
    }
}
