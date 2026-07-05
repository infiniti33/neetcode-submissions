class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const left = heights[l];
            const right = heights[r];
            const lowestSide = Math.min(left, right);
            const water = lowestSide * (r - l);
            maxWater = Math.max(maxWater, water);

            if (left < right) {
                l++;
            } else {
                r--;
            }
        }

        return maxWater;
    }
}
