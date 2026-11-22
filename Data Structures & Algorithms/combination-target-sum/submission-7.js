class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const dfs = (start, path, sum) => {
            if (sum === target) {
                result.push([...path]);
                return;
            }
            if (sum > target) return;

            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                dfs(i, path, sum + nums[i]);
                path.pop();
            }
        }

        dfs(0, [], 0);

        return result;
    }
}
