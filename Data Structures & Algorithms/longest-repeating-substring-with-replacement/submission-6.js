class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;

        const counts = new Map();
        let mostFreq = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            counts.set(c, (counts.get(c) ?? 0) + 1);

            mostFreq = Math.max(mostFreq, counts.get(c));

            while ((r - l + 1) - mostFreq > k) {
                const oldC = s[l];
                counts.set(oldC, counts.get(oldC) - 1);
                l++;
            }

            longest = Math.max(longest, (r - l + 1));
        }

        return longest;
    }
}
