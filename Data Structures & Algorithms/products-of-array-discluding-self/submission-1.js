class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProducts = new Array(nums.length).fill(1);
        const suffixProducts = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1];
        }

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefixProducts[i] * suffixProducts[i];
        }

        return result;
    }
}
