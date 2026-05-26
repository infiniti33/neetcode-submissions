class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const chars = new Set(s);
        let maxFreq = 0;

        for (const c of chars) {
            let l = 0;
            let count = 0;
            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) {
                    count++;
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === c) {
                        count--;
                    }
                    l++;
                }

                maxFreq = Math.max(maxFreq, r - l + 1);
            }
        }
        return maxFreq;
    }
}
