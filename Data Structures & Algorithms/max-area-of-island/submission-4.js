class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            grid[r][c] = 2;

            let area = 1;
            const neighbors = [[r, c + 1], [r, c - 1], [r + 1, c], [r - 1, c]];
            for (const [newRow, newCol] of neighbors) {
                if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol] === 1) {
                    area += dfs(newRow, newCol);
                }
            }
            return area;
        }

        let maxArea = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, dfs(r, c));
                }
            }
        }

        return maxArea;
    }
}
