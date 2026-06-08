class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxArea = 0;
        let l = 0;
        let r = height.length - 1;

        let maxL = height[l];
        let maxR = height[r];

        while (l < r) {
            if (maxL < maxR) {
                l++;
                maxL = Math.max(maxL, height[l]);
                maxArea += maxL - height[l];
            } else {
                r--;
                maxR = Math.max(maxR, height[r]);
                maxArea += maxR - height[r];
            }
        }
        return maxArea;
    }
}
