class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 0 = sum + y
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const answer = [];
        for (let i = 0; i < nums.length; i++) {
            // skip duplicate numbers (1st number in triplicate)
            if (i !== 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    answer.push([nums[i], nums[left], nums[right]]);
                    // skip duplicate second numbers
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    // skip duplicate third numbers
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    left++
                    right--;
                } else if (sum < 0) {
                    left++
                } else {
                    right--;
                }
            }
        }
        return answer;
    }
}
