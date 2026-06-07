class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;

        const freq = {};

        let l = 0;
        let maxFreq = 0;
        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = (freq[s[r]] || 0) + 1
            maxFreq = Math.max(freq[s[r]], maxFreq);

            while (r - l + 1 - maxFreq > k) {
                freq[s[l]]--
                l++;
            }
            longest = Math.max(r - l + 1, longest);
        }

        return longest;
    }
}
