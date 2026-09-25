class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const counts = {};
        let longest = 0;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            counts[c] = (counts[c] || 0) + 1

            while (counts[c] > 1) {
                const oldC = s[l];
                counts[oldC]--;
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
