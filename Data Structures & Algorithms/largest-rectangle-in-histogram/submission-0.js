class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxRect = 0;

        const stack = [];
        for (let i = 0; i <= heights.length; i++) {
            const height = i === heights.length ? 0 : heights[i];
            while (stack.length && heights[stack[stack.length - 1]] > height) {
                const h = heights[stack.pop()];
                const w = !stack.length ? i : i - stack[stack.length - 1] - 1;
                maxRect = Math.max(maxRect, h * w);
            }
            stack.push(i);
        }

        return maxRect;
    }
}
