class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let maxFreq = 0;
        const freq = {};

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = (freq[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[s[r]]);
            // shrink invalid window
            if (r - l + 1 - maxFreq > k) {
                freq[s[l]]--;
                l++;
            }
            maxLength = Math.max(r - l + 1, maxLength);
        }

        return maxLength;
    }
}
