class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        const counts = new Map();

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            counts.set(c, (counts.get(c) ?? 0) + 1);
            
            while (counts.get(c) > 1) {
                const oldC = s[l];
                counts.set(oldC, counts.get(oldC) - 1);
                l++;
            }
            longest = Math.max(longest, (r - l + 1));
        }

        return longest;
    }
}
