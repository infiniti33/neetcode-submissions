class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const backtrack = (start, path, sum) => {
            if (sum > target) return;
            if (sum === target) {
                result.push([...path]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i, path, sum + nums[i]);
                path.pop();
            }
        }

        backtrack(0, [], 0);

        return result;
    }
}
