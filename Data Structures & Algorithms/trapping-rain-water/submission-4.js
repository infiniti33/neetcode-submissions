class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let water = 0;

        let maxLeft = height[0];
        let maxRight = height[height.length - 1];
        let l = 0;
        let r = height.length - 1;
        while (l < r) {
            if (maxLeft < maxRight) {
                l++;
                maxLeft = Math.max(maxLeft, height[l]);
                water += maxLeft - height[l];
            } else {
                r--;
                maxRight = Math.max(maxRight, height[r]);
                water += maxRight - height[r];
            }
        }

        return water;
    }
}
