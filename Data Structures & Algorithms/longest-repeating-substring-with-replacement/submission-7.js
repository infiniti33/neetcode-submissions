class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const result = [Infinity, Infinity];
        const counts = new Map();

        let maxFreq = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const newC = s[r];
            counts.set(newC, (counts.get(newC) || 0) + 1);
            maxFreq = Math.max(maxFreq, counts.get(newC));
            
            while (r - l + 1 - maxFreq > k) {
                const oldC = s[l];
                counts.set(oldC, counts.get(oldC) - 1);
                l++;
            }

            result[0] = l;
            result[1] = r;
        }

        return result[0] === Infinity ? 0 : result[1] - result[0] + 1;
    }
}
