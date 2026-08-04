class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const backtrack = (start, candidates, sum) => {
            if (sum === target) {
                result.push([...candidates]);
                return;
            }
            if (sum > target) {
                return;
            }
            for (let i = start; i < nums.length; i++) {
                candidates.push(nums[i]);
                backtrack(i, candidates, sum + nums[i]);
                candidates.pop();
            }
        }

        backtrack(0, [], 0);

        return result;
    }
}
