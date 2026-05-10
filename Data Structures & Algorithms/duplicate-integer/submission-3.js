class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = {};

        for (const n of nums) {
            if (seen[n]) return true;
            seen[n] = true;
        }

        return false;
    }
}
