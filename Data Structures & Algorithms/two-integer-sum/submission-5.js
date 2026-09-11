class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = {};
        
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (complements[complement] !== undefined) {
                return [complements[complement], i];
            }
            complements[nums[i]] = i;
        }

        return [];
    }
}
