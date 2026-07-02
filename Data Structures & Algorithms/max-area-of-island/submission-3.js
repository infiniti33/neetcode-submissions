class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0;

        const bfs = (r, c) => {
            const q = new Queue([[r, c]]);
            grid[r][c] = 2;

            let area = 1;
            while (q.size()) {
                for (let i = q.size(); i > 0; i--) {
                    const [row, col] = q.dequeue();

                    const neighbors = [[row, col + 1], [row, col - 1], [row + 1, col], [row - 1, col]];
                    for (const [newRow, newCol] of neighbors) {
                        if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol] === 1) {
                            area++;
                            q.enqueue([newRow, newCol]);
                            grid[newRow][newCol] = 2;
                        }
                    }
                }
            }
            return area;
        }

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
