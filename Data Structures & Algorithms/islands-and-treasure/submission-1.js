class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const bfs = (r, c) => {
            const q = new Queue([[r, c]]);

            let distance = 1;
            while (q.size()) {
                for (let i = q.size(); i > 0; i--) {
                    const [row, col] = q.dequeue();

                    const neighbors = [[row, col + 1], [row, col - 1], [row + 1, col], [row - 1, col]];
                    for (const [newR, newC] of neighbors) {
                        if (newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] > distance) {
                            grid[newR][newC] = distance;
                            q.enqueue([newR, newC]);
                        }
                    }
                }
                distance++;
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    bfs(r, c);
                }
            }
        }

        return grid;
    }
}
