class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let result = 0;
        const counts = {};

        let maxFreq = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            counts[s[r]] = (counts[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, counts[s[r]]);

            while (r - l + 1 - maxFreq > k) {
                counts[s[l]]--;
                l++;
            }

            result = Math.max(maxFreq, r - l + 1);
        }

        return result;
    }
}
