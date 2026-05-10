class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * target = i + j
     * target = i + complement
     * Input: nums = [3,5,4,6], target = 7
     * Output: [0,2]
     * Input: nums = [4,5,6], target = 10
     * Output: [0,2]
     */
    twoSum(nums, target) {
        const complements = {};

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (complements[nums[i]] !== undefined) {
                return [i, complements[nums[i]]];
            }
            complements[complement] = i;
        }

        return [];
    }
}
