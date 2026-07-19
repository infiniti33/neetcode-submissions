class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        nums.sort((a, b) => a - b);
        
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            const a = nums[i];
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const b = nums[l];
                const c = nums[r];
                const sum = a + b + c;
                if (sum === 0) {
                    result.push([a, b, c]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                    while (l < r && nums[r] === nums[r + 1]) {
                        r--;
                    }
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return result;
    }
}
