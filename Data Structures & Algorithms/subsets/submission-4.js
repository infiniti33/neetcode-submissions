class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = [];

        const backtrack = (start, path) => {
            subsets.push([...path]);
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i + 1, path);
                path.pop();
            }
        }

        backtrack(0, []);

        return subsets;
    }
}
