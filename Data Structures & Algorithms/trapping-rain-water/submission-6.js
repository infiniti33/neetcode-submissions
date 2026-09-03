class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let maxL = height[l];
        let maxR = height[r];
        let water = 0;
        while (l < r) {
            if (maxL > maxR) {
                r--;
                maxR = Math.max(maxR, height[r]);
                water += maxR - height[r];
            } else {
                l++;
                maxL = Math.max(maxL, height[l]);
                water += maxL - height[l];
            }
        }

        return water;
    }
}
