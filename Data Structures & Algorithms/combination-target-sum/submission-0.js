class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const backtrack = (start, subset, total) => {
            if (total === target) {
                result.push([...subset]);
            }
            if (total > target) return;
            for (let i = start; i < nums.length; i++) {
                subset.push(nums[i]);
                backtrack(i, subset, total + nums[i]);
                subset.pop();
            }
        }

        backtrack(0, [], 0);

        return result;
    }
}
