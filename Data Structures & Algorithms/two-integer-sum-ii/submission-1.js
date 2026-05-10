class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     * [0, 2, 3, 4, 7, 8], target = 5
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while (numbers[left] + numbers[right] !== target) {
            while (numbers[left] + numbers[right] > target) {
                right--;
            }
            while (numbers[left] + numbers[right] < target)
                left++
            }
        return [left + 1, right + 1];
    }
}
