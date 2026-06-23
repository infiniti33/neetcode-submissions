class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        const chars = new Map();

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            chars.set(s[r], (chars.get(s[r]) ?? 0) + 1);
            while (chars.get(s[r]) > 1) {
                chars.set(s[l], chars.get(s[l]) - 1);
                l++;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
