class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        if (!s.length) {
            return longest;
        }
        let l = 0;
        let r = 0;
        let freq = {};
        while (r < s.length) {
            freq[s[r]] = (freq[s[r]] || 0) + 1;
            while (freq[s[r]] > 1) {
                freq[s[l]]--;
                l++;
            }
            longest = Math.max(r  - l + 1, longest);
            r++;
        }

        return longest;
    }
}
