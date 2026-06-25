class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;

            let area = 1;
            area += dfs(r + 1, c);
            area += dfs(r - 1, c);
            area += dfs(r, c + 1);
            area += dfs(r, c - 1);

            return area;
        }

        let maxArea = 0;
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] === 1) {
                    maxArea = Math.max(maxArea, dfs(row, col));
                }
            }
        }

        return maxArea;
    }
}
