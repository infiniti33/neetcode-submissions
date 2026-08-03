class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];

        const backtrack = (start, subset) => {
            result.push([...subset]);
            for (let i = start; i < nums.length; i++) {
                subset.push(nums[i]);
                backtrack(i + 1, subset);
                subset.pop();
            }
        }

        backtrack(0, []);

        return result;
    }
}
