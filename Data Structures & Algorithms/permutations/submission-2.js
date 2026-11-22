class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const seen = new Set();

        const dfs = (path) => {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (!seen.has(i)) {
                    path.push(nums[i]);
                    seen.add(i);
                    dfs(path);
                    path.pop();
                    seen.delete(i);
                }
            }
        }

        dfs([]);

        return result;
    }
}
// [1, 2, 3]
// [[1, 2, 3], [] ]
