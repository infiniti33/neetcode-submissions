class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const dfs = (start, path) => {
            res.push([...path]);

            for (let i = start;  i < nums.length; i++) {
                path.push(nums[i]);
                dfs(i + 1, path);
                path.pop();
            }
        }

        dfs(0, []);

        return res;
    }
}
