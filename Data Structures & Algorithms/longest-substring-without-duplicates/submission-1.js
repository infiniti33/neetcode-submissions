class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s.length) return 0;
        const map = {};
        let longest = 0;
        let left = 0;
        let right = 0;
        while (right < s.length) {
            if (map[s[right]] !== undefined) {
                if (map[s[right]] >= left) {
                    left = map[s[right]];
                    left++;
                }
                map[s[right]] = right;
            } else {
                map[s[right]] = right;
            }
            longest = Math.max(right - left + 1, longest);
            right++;
        }
        return longest;
    }
}
