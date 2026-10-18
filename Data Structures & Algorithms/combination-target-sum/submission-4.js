class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const dfs = (start, sum, path) => {
            if (sum === target) {
                result.push([...path]);
            }
            if (sum > target) {
                return;
            }
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                dfs(i, sum + nums[i], path);
                path.pop();
            }
        }

        dfs(0, 0, []);

        return result;
    }
}
