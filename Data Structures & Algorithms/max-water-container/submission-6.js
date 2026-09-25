class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        
        let r = heights.length - 1;
        let l = 0;
        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            const area = height * width;
            maxArea = Math.max(maxArea, area); 
            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea;
    }
}
