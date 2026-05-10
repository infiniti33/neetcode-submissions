class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // iterate through the array, calculate the area and store/update the max value along the way
        let maxArea = 0;
        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const x = j - i;
                const y = Math.min(heights[i], heights[j]);
                const area = x * y;
                maxArea = Math.max(maxArea, area);
            }
        }
        return maxArea;
    }
}
