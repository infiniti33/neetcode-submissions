class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        let longest = 0;
        for (const n of seen) {
            if (seen.has(n - 1)) continue;
            let currentSequence = 1;
            let current = n;
            while (seen.has(current + 1)) {
                currentSequence++;
                current++;
            }
            longest = Math.max(longest, currentSequence);
        }
        return longest;
    }
}
