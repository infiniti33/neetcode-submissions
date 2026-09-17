class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = [];

        const backtrack = (subset, start) => {
            subsets.push([...subset]);
            for (let i = start; i < nums.length; i++) {
                subset.push(nums[i]);
                backtrack(subset, i + 1);
                subset.pop();
            }
        }

        backtrack([], 0);

        return subsets;
    }
}
