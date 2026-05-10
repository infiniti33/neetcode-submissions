class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            const cur = nums[i];
            const complement = target - cur;
            if (seen.has(complement)) return [seen.get(complement), i];
            seen.set(cur, i);
        }
    }
}
