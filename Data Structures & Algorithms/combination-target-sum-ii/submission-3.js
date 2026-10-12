class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const nums = candidates.sort((a, b) => a - b);
        const result = [];
        const backtrack = (start, sum, path) => {
            if (sum === target) {
                result.push([...path]);
                return;
            }
            if (sum > target) return;
            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i - 1] === nums[i]) continue;
                path.push(nums[i]);
                backtrack(i + 1, sum + nums[i], path);
                path.pop();
            }
        }
        backtrack(0, 0, []);
        return result;
    }
}
