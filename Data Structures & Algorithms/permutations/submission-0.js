class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];

        const backtrack = (perm) => {
            if (perm.length === nums.length) {
                result.push([...perm]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (perm.includes(nums[i])) continue;
                perm.push(nums[i]);
                backtrack(perm);
                perm.pop();
            }
        }

        backtrack([]);

        return result;
    }
}
