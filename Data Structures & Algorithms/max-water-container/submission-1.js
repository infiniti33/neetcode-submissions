class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // iterate through the array, calculate the area and store/update the max value along the way
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const x = right - left;
            const y = Math.min(heights[left], heights[right]);
            const area = x * y;
            maxArea = Math.max(area, maxArea);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}
