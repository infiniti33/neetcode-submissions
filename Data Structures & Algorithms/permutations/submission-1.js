class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const seen = new Set();

        const backtrack = (path) => {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (!seen.has(i)) {
                    seen.add(i);
                    path.push(nums[i]);
                    backtrack(path);
                    path.pop();
                    seen.delete(i);
                }
            }
        }

        backtrack([]);

        return result;
    }
}
