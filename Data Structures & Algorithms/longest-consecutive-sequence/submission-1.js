class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        let longest = 0;
        for (const n of nums) {
            if (seen.has(n - 1)) {
                continue;
            }
            let streak = 1;
            let c = n + 1;
            while (seen.has(c)) {
                streak++;
                c++;
            }
            longest = Math.max(longest, streak);
        }
        
        return longest;
    }
}
