class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        candidates.sort((a, b) => a - b);

        const backtrack = (start, sum, path) => {
            if (sum === target) {
                result.push([...path]);
                return;
            }
            if (sum > target) {
                return;
            }
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i - 1] === candidates[i]) continue;
                path.push(candidates[i]);
                backtrack(i + 1, sum + candidates[i], path);
                path.pop();
            }
        }

        backtrack(0, 0, []);

        return result;
    }
}
