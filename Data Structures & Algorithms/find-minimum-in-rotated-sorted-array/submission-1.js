class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let min = nums[l];
        while (l <= r) {
            if (nums[l] <= nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }
            const mid = Math.floor(l + (r - l) / 2);
            min = Math.min(min, nums[mid]);
            if (nums[mid] >= nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return min;
    }
}
