class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const backtrack = (index, subset) => {
            result.push([...subset]);
            for (let i = index; i < nums.length; i++) {
                subset.push(nums[i]);
                backtrack(i + 1, subset);
                subset.pop();
            }
        }

        backtrack(0, []);

        return result;
    }
}
