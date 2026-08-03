class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const result = [];

        const backtrack = (start, subset, total) => {
            if (total === target) {
                result.push([...subset]);
                return;
            }
            if (total > target) {
                return;
            }
            for (let i = start; i < candidates.length; i++) {
                subset.push(candidates[i]);
                const current = i;
                while (candidates[i] === candidates[i + 1]) {
                    i++;
                }
                backtrack(current + 1, subset, total + candidates[current]);
                subset.pop();
            }
        }

        backtrack(0, [], 0);

        return result;
    }
}
