class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);

        let longest = 0;
        for (const n of numSet) {
            if (numSet.has(n - 1)) {
                continue;
            }
            let streak = 1;
            let current = n + 1;
            while (numSet.has(current)) {
                streak++;
                current++;
            }
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
