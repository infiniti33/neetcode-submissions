class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }
        return Math.max(this.robHouses(nums.slice(1)), this.robHouses(nums.slice(0, nums.length - 1)));
    }
    robHouses(houses) {
        let rob1 = 0;
        let rob2 = 0;
        for (const h of houses) {
            const temp = Math.max(rob1 + h, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
}
