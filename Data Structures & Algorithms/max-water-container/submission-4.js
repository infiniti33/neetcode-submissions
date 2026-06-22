class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const left = heights[l];
            const right = heights[r];
            const area = Math.min(left, right) * (r - l);
            maxArea = Math.max(maxArea, area);

            if (left > right) {
                r--;
            } else {
                l++;
            }
        }
        return maxArea;
    }
}
