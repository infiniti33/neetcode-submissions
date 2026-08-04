class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const result = [];
        const backtrack = (start, nums, sum) => {
            if (sum === target) {
                result.push([...nums]);
                return;
            }
            if (sum > target) {
                return;
            }
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i - 1] === candidates[i]) {
                    continue;
                }
                nums.push(candidates[i]);
                backtrack(i + 1, nums, sum + candidates[i]);
                nums.pop();
            }
        }
        backtrack(0, [], 0);

        return result;
    }
}
