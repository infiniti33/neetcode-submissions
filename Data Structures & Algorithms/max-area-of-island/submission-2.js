class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;


        const bfs = (r, c) => {
            const q = new Queue([[r, c]]);
            grid[r][c] = 2;

            let area = 0;
            while (q.size()) {
                const [row, col] = q.dequeue();
                const neighbors = [[row, col + 1], [row, col - 1], [row + 1, col], [row - 1, col]];
                for (const [newR, newC] of neighbors) {
                    if (newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] === 1) {
                        grid[newR][newC] = 2;
                        q.enqueue([newR, newC]);
                    }
                }
                area++;
            }

            return area;
        }

        let maxArea = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, bfs(r, c));
                }
            }
        }
        return maxArea;
    }
}
