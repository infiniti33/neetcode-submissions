class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const q = new Queue();
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    q.enqueue([r, c]);
                }
            }
        }

        let distance = 1;
        while (q.size()) {
            for (let i = q.size(); i > 0; i--) {
                const [r, c] = q.dequeue();
                const neighbors = [[r, c + 1], [r, c - 1], [r + 1, c], [r - 1, c]];
                for (const [newR, newC] of neighbors) {
                    if (newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] === 2147483647) {
                        grid[newR][newC] = distance;
                        q.enqueue([newR, newC]);
                    }
                }
            }
            distance++;
        }

        return grid;
    }
}
